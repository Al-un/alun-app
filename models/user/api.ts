/**
 * API response upon successful login
 */
export interface LoginAPISuccess {
  token: string
}

/**
 * Wrapping success status
 */
export interface LoginResult extends LoginAPISuccess {
  success: boolean
}

/**
 * To register a new user or change a password
 */
export interface PasswordRequest {
  email: string
  /**
   * 0    : reset password
   * 1    : new user
   */
  requestType: 0 | 1
  redirectUrl: string
}

export type PasswordResetToken = string
