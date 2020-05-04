import { Credentials, LoginAPISuccess, LoginResult } from '~/models/user'

const BASE_URL = process.env.ALUN_BASE_URL
const API_URL_USER = process.env.ALUN_API_URL_USER

export const userApi = {
  register: async (email: string): Promise<void> => {
    try {
      const resp = await fetch(`${API_URL_USER}/v1/password/request`, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          redirectUrl: `${BASE_URL}/user/password-update/?requestType=1&t=`,
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
      const resp = await fetch(`${API_URL_USER}/v1/password/request`, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          redirectUrl: `${BASE_URL}/user/password-update/?requestType=1&t=`,
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
      const resp = await fetch(`${API_URL_USER}/v1/password/update`, {
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

  login: async ({ email, password }: Credentials): Promise<LoginResult> => {
    const resp = await fetch(`${API_URL_USER}/v1/login`, {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })

    if (resp.status === 200) {
      const success: LoginAPISuccess = await resp.json()
      return {
        ...success,
        success: true
      }
    } else if (resp.status === 403) {
      return {
        success: false,
        token: ''
      }
    } else {
      const pouet = await resp.json()
      console.log(pouet)
      throw new Error('failed')
    }
  },

  logout: async () => {}
}
