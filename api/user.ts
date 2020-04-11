import { SuccessfulLogin } from '~/models/user'

const API_URL_USER = 'http://localhost:8000'

export const userApi = {
  register: async (email: string): Promise<void> => {
    try {
      await fetch(`${API_URL_USER}/v1/users/register`, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'appplication/json' },
        body: JSON.stringify({ email })
      })
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
      await fetch(`${API_URL_USER}/v1/users/password/update`, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'appplication/json' },
        body: JSON.stringify(payload)
      })
    } catch (err) {
      console.warn(err)
    }
  },

  login: async (email: string, password: string): Promise<SuccessfulLogin> => {
    const resp = await fetch(`${API_URL_USER}/v1/users/login`, {
      method: 'POST',
      // mode: 'cors',
      headers: { 'Content-Type': 'appplication/json' },
      body: JSON.stringify({ email, password })
    })
    const success: SuccessfulLogin = await resp.json()
    localStorage.setItem('token', success.token)

    return success
  },

  logout: async () => {}
}
