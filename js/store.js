// Fake "backend" for login + saved books, stored in the browser's localStorage.
//
// Every function is async on purpose: when you build a real backend (e.g. Vercel functions in /api),
// replace each body with a fetch() call and nothing else in the app has to change. For example:
//
//   export async function saveBook(book) {
//     const res = await fetch("/api/saved", { method: "POST", body: JSON.stringify(book) });
//     return res.json();
//   }

const USER_KEY = "g2b:user";
const savedKey = (username) => `g2b:saved:${username}`;

function read(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function write(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // storage full or blocked (private mode) — the app still works, it just won't remember.
  }
}

export async function getCurrentUser() {
  return read(USER_KEY, null);
}

/** Demo login: any username works and the password isn't checked. */
export async function login(username) {
  const user = { username: username.trim(), loggedInAt: new Date().toISOString() };
  write(USER_KEY, user);
  return user;
}

export async function logout() {
  try {
    localStorage.removeItem(USER_KEY);
  } catch {}
}

export async function getSavedBooks() {
  const user = await getCurrentUser();
  return user ? read(savedKey(user.username), []) : [];
}

/** Saves the fields needed to redraw the book later, plus which game it was recommended for. */
export async function saveBook(book, game) {
  const user = await getCurrentUser();
  if (!user) throw new Error("Log in to save books");
  const saved = await getSavedBooks();
  if (!saved.some((b) => b.key === book.key)) {
    saved.unshift({ ...book, savedFrom: game?.title ?? null, savedAt: new Date().toISOString() });
    write(savedKey(user.username), saved);
  }
  return saved;
}

export async function removeBook(bookKey) {
  const user = await getCurrentUser();
  if (!user) return [];
  const saved = (await getSavedBooks()).filter((b) => b.key !== bookKey);
  write(savedKey(user.username), saved);
  return saved;
}
