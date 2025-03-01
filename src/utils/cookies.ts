import Cookies from "js-cookie";

// Set a cookie
export const setCookie = (name: string, value: string, days?: number) => {
  Cookies.set(name, value, {
    expires: days || 1, // Default expiration: 1 day
    secure: true, // Ensures the cookie is sent over HTTPS
    sameSite: "Strict", // Prevents CSRF attacks
  });
};

// Get a cookie
export const getCookie = (name: string): string | undefined => {
  return Cookies.get(name);
};

// Remove a cookie
export const removeCookie = (name: string) => {
  Cookies.remove(name);
};
