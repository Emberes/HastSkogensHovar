// TEMPORARY login without a backend.
//
// This only hides the admin page from casual visitors. It is NOT real
// security: everything in the browser (including the password hash below)
// can be read by anyone. Do not put anything secret behind it. When the
// backend exists, replace these functions with calls to it; the pages that
// use them do not need to change.

const STORAGE_KEY = "hh-admin";

// SHA-256 hex hash of the admin password, from .env.local / the host's
// environment variables. See .env.example for how to create it.
const PASSWORD_HASH = (import.meta.env.VITE_ADMIN_PASSWORD_HASH as string | undefined)
  ?.trim()
  .toLowerCase();

export const isLoginConfigured = Boolean(PASSWORD_HASH);

async function sha256Hex(text: string): Promise<string> {
  const bytes = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return Array.from(new Uint8Array(bytes), (b) => b.toString(16).padStart(2, "0")).join("");
}

// Fallback when sessionStorage is blocked (some private modes).
let loggedInInMemory = false;

export function isLoggedIn(): boolean {
  if (loggedInInMemory) return true;
  try {
    return sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

export async function logIn(password: string): Promise<boolean> {
  if (!PASSWORD_HASH) return false;
  const ok = (await sha256Hex(password)) === PASSWORD_HASH;
  if (ok) {
    loggedInInMemory = true;
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Storage blocked: the login lasts until the page reloads.
    }
  }
  return ok;
}

export function logOut(): void {
  loggedInInMemory = false;
  try {
    sessionStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}
