// src/features/auth/services/tokenUtils.ts

export function isAccessTokenExpired(token: string |null) {
  if (!token) return true;

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));

    return Date.now() >= payload.exp * 1000;
  } catch {
    return true;
  }
}