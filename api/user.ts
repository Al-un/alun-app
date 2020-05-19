import { Credentials, LoginAPISuccess } from '~/models/user'
import { USER_PWD_REQ, HTTP, API } from '~/constants'
import { ApiErrorOr } from '~/models'

const BASE_URL = process.env.ALUN_BASE_URL
const API_URL_USER = process.env.ALUN_API_URL_USER

export const userApi = {
  register: async (email: string): Promise<ApiErrorOr<undefined>> => {
    try {
      const resp = await fetch(`${API_URL_USER}/v1/password/request`, {
        method: HTTP.METHOD.POST,
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          redirectUrl: `${BASE_URL}/user/password-update/?requestType=${USER_PWD_REQ.NEW_USER}&t=`,
          requestType: USER_PWD_REQ.NEW_USER
        })
      })
      const { status } = resp

      // All good!
      if (status === HTTP.STATUS.NO_CONTENT) {
        return undefined
      }

      // Fetch the content to get error detail
      const content = await resp.json()
      // Potentially an identified error
      if (
        HTTP.STATUS.BAD_REQUEST === status &&
        API.MSGS.USER_EMAIL_ALREADY_TAKEN === content.code
      ) {
        return { status, code: content.code }
      }

      return {
        status,
        code: API.MSGS.UNKNOWN,
        error: content
      }
    } catch (error) {
      return { error }
    }
  },

  requestResetPassword: async (
    email: string
  ): Promise<ApiErrorOr<undefined>> => {
    try {
      const resp = await fetch(`${API_URL_USER}/v1/password/request`, {
        method: HTTP.METHOD.POST,
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          redirectUrl: `${BASE_URL}/user/password-update/?requestType=${USER_PWD_REQ.RESET}&t=`,
          requestType: USER_PWD_REQ.RESET
        })
      })
      const { status } = resp

      // All good!
      if (status === HTTP.STATUS.NO_CONTENT) {
        return undefined
      }

      const error = await resp.json()

      return { status, error }
    } catch (error) {
      return { error }
    }
  },

  updatePassword: async (
    token: string,
    password: string,
    username?: string
  ): Promise<ApiErrorOr<undefined>> => {
    const payload = username
      ? { token, password, username }
      : { token, password }

    try {
      const resp = await fetch(`${API_URL_USER}/v1/password/update`, {
        method: HTTP.METHOD.POST,
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const { status } = resp

      // All good!
      if (status === HTTP.STATUS.NO_CONTENT) {
        return undefined
      }

      const error = await resp.json()

      return { status, error }
    } catch (error) {
      return { error }
    }
  },

  login: async ({
    email,
    password
  }: Credentials): Promise<ApiErrorOr<LoginAPISuccess>> => {
    try {
      const resp = await fetch(`${API_URL_USER}/v1/login`, {
        method: HTTP.METHOD.POST,
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })
      const content = await resp.json()

      switch (resp.status) {
        case HTTP.STATUS.OK:
          return content as LoginAPISuccess
        case HTTP.STATUS.FORBIDDEN:
          return { status: resp.status, code: API.MSGS.USER_LOGIN_FAILED }
        default:
          return { status: resp.status, error: content }
      }
    } catch (error) {
      return { error }
    }
  },

  logout: async (token: string): Promise<ApiErrorOr<undefined>> => {
    try {
      const resp = await fetch(`${API_URL_USER}/v1/logout`, {
        method: HTTP.METHOD.POST,
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`
        }
      })
      const content = await resp.json()

      return resp.status === HTTP.STATUS.NO_CONTENT
        ? undefined
        : { status: resp.status, error: content }
    } catch (error) {
      return { error }
    }
  }
}
