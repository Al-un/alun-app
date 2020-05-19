/**
 * Standard HTTP constants
 */
export const HTTP = {
  METHOD: {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
  },
  STATUS: {
    OK: 200,
    NO_CONTENT: 204,
    UNAUTHORIZED: 401,
    BAD_REQUEST: 400,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500
  }
}

/**
 * Al-un API specific constants
 */
export const API = {
  /**
   * Error message codes
   */
  MSGS: {
    USER_EMAIL_ALREADY_TAKEN: 10201,
    USER_LOGIN_FAILED: 10299,
    UNKNOWN: 99999
  }
}
