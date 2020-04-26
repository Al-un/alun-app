import { SuccessfulLogin } from '~/models/user'

const HOST = 'http://localhost:8080'
const API_URL_USER = 'http://localhost:8000'

export const userApi = {
  register: async (email: string): Promise<void> => {
    try {
      const resp = await fetch(`${API_URL_USER}/users/v1/password/request`, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          redirectUrl: `${HOST}/user/password-update/?requestType=1&t=`,
          requestType: 1
        })
      })

      console.debug(resp)
    } catch (err) {
      console.warn(err)
    }
  },

  requestResetPassword: async (email: string): Promise<void> => {
    try {
      const resp = await fetch(`${API_URL_USER}/users/v1/password/request`, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          redirectUrl: `${HOST}/user/password-update/?requestType=1&t=`,
          requestType: 0
        })
      })

      console.debug(resp)
    } catch (err) {
      console.warn(err)
    }
  },

  updatePassword: async (
    token: string,
    password: string,
    username?: string
  ): Promise<void> => {
    const payload = username
      ? { token, password, username }
      : { token, password }

    try {
      const resp = await fetch(`${API_URL_USER}/users/v1/password/update`, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      console.debug(resp)
    } catch (err) {
      console.warn(err)
    }
  },

  login: async (email: string, password: string): Promise<SuccessfulLogin> => {
    const resp = await fetch(`${API_URL_USER}/users/v1/login`, {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    const success: SuccessfulLogin = await resp.json()
    localStorage.setItem('token', success.token)

    return success
  },

  logout: async () => {}
}