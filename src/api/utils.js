/**
 * Root URL for all API calls
 */
export const API_BASE_URL = "http://localhost:8000";

/**
 * Local storage key for user token
 */
export const LS_TOKEN = "alun_token";

/**
 * Build `Authorization` header if token is available
 *
 * @returns {Object} Authorization header or an empty object
 */
export const getAuthHeader = () => {
  const token = localStorage.getItem(LS_TOKEN);
  return token ? { Authorization: `Bearer ${token}` } : {};
};

/**
 * Build common and convenient headers
 * @returns {[key: string]: string} headers
 */
export const getHeaders = () => ({
  ...getAuthHeader(),
  "Content-Type": "application/json",
  Accept: "application/json"
});

/**
 * Check if there is an authorisation token in the local
 * storage
 *
 * @returns true if an usable token is found
 */
export const isAuthenticated = () => {
  return localStorage.getItem(LS_TOKEN);
};
