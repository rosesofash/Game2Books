// Thin wrapper around the Open Library APIs. Docs: https://openlibrary.org/developers/api

import { CONFIG } from "../config.js";

const BASE = "https://openlibrary.org";

const SEARCH_FIELDS = [
  "key", "title", "author_name", "first_publish_year", "cover_i", "subject",
  "ratings_average", "ratings_count", "readinglog_count", "want_to_read_count",
  "already_read_count", "currently_reading_count", "number_of_pages_median",
  "editions", "editions.title", "editions.language", "editions.cover_i", // best English edition, for translated titles + covers
].join(",");

const cache = new Map();

async function getJSON(url) {
  if (cache.has(url)) return cache.get(url);
  const promise = fetch(url).then((res) => {
    if (!res.ok) throw new Error(`Open Library ${res.status}: ${url}`);
    return res.json();
  });
  cache.set(url, promise);
  promise.catch(() => cache.delete(url)); // don't cache failures
  return promise;
}

/** Search works by subject. Returns the raw `docs` array. */
export async function searchBySubject(subject, sort = "readinglog", limit = CONFIG.resultsPerQuery) {
  let q = `subject:"${subject}"`;
  if (CONFIG.requireFiction) q += ` AND subject:"fiction"`;
  const params = new URLSearchParams({ q, sort, limit: String(limit), fields: SEARCH_FIELDS, lang: "en" });
  const data = await getJSON(`${BASE}/search.json?${params}`);
  return data.docs ?? [];
}

/** Full work record, used for the description in the book popup. */
export async function getWork(workKey) {
  return getJSON(`${BASE}${workKey}.json`);
}

/** Work descriptions are either a string or { value }. They often have "----" link sections and markdown links. */
export function cleanDescription(description) {
  const text = typeof description === "string" ? description : description?.value;
  if (!text) return "";
  return text
    .split(/\n-{3,}/)[0]                        // drop trailing "----------" source/link sections
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")    // [text](url) → text
    .replace(/\[\d+\]:\s*\S+/g, "")             // [1]: https://... reference lines
    .replace(/\(\[source\]\[\d+\]\)/gi, "")
    .replace(/\*+([^*\n]+)\*+/g, "$1")           // ***bold*** / *italic* markdown
    .trim();
}

export function coverUrl(coverId, size = "M") {
  return coverId ? `https://covers.openlibrary.org/b/id/${coverId}-${size}.jpg` : null;
}

export function workUrl(workKey) {
  return `${BASE}${workKey}`;
}

/** Store search links, built from title + author since we don't have ISBNs for every work. */
export function storeLinks(book) {
  const query = encodeURIComponent(`${book.title} ${book.authors[0] ?? ""}`.trim());
  return [
    { label: "Open Library", href: workUrl(book.key) },
    { label: "Amazon", href: `https://www.amazon.com/s?k=${query}&i=stripbooks` },
    { label: "Bookshop.org", href: `https://bookshop.org/search?keywords=${query}` },
    { label: "Goodreads", href: `https://www.goodreads.com/search?q=${query}` },
  ];
}

/**
 * Work titles are in the original language ("Преступление и наказание"). If the best English edition's
 * title shares no words with it, it's a translation, so show that instead ("Crime and Punishment").
 */
export function englishTitle(doc) {
  const edition = doc.editions?.docs?.[0];
  if (!edition?.title || !edition.language?.includes("eng")) return doc.title;
  const words = (s) => new Set(s.toLowerCase().match(/\p{L}{3,}/gu) ?? []);
  const workWords = words(doc.title);
  const shared = [...words(edition.title)].some((w) => workWords.has(w));
  return shared ? doc.title : edition.title.replace(/\s*[([].*$/, "").trim();
}

/** Prefer the English edition's cover (the work's default cover is sometimes a translation). */
export function englishCover(doc) {
  const edition = doc.editions?.docs?.[0];
  return edition?.language?.includes("eng") && edition.cover_i ? edition.cover_i : doc.cover_i;
}
