// Loads game cover art from Wikipedia's page summary API, so we don't store images in the repo.

const cache = new Map();

/** Returns an image URL for the Wikipedia page, or null if the page has none. */
export function getWikiImage(pageTitle) {
  if (!pageTitle) return Promise.resolve(null);
  if (!cache.has(pageTitle)) {
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(pageTitle)}`;
    cache.set(
      pageTitle,
      fetch(url)
        .then((res) => (res.ok ? res.json() : null))
        .then((data) => data?.originalimage?.source ?? data?.thumbnail?.source ?? null)
        .catch(() => null)
    );
  }
  return cache.get(pageTitle);
}
