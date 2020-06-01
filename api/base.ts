import { ApiOptions, ApiCallOptions } from '~/models'
import { HTTP } from '~/constants'

export abstract class ApiBase {
  // ---------- Attributes ----------------------------------------------------
  _baseUrl: string

  // ---------- Initialisation ------------------------------------------------
  constructor(options: ApiOptions) {
    if (options.baseUrl) {
      this._baseUrl = options.baseUrl
    } else {
      throw new Error('BaseURL cannot be undefined!')
    }
  }

  // ---------- Helpers -------------------------------------------------------
  buildHeaders(token?: string): { [key: string]: string } {
    const authHeader: { [key: string]: string } = token
      ? { Authorization: `Bearer ${token}` }
      : {}

    return {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...authHeader
    }
  }

  async get<T>(url: string, options: ApiCallOptions = {}): Promise<T> {
    const resp = await fetch(`${this._baseUrl}${url}`, {
      method: HTTP.METHOD.GET,
      mode: 'cors',
      headers: {
        ...this.buildHeaders(options.token),
        ...options.headers
      }
    })

    const result: T = await resp.json()
    return result
  }

  async post<T>(
    url: string,
    body: any,
    options: ApiCallOptions = {}
  ): Promise<T> {
    const resp = await fetch(`${this._baseUrl}${url}`, {
      method: HTTP.METHOD.POST,
      mode: 'cors',
      headers: {
        ...this.buildHeaders(options.token),
        ...options.headers
      },
      body: JSON.stringify(body)
    })

    const result: T = await resp.json()
    return result
  }

  async delete<T>(url: string, options: ApiCallOptions = {}): Promise<T> {
    const resp = await fetch(`${this._baseUrl}${url}`, {
      method: HTTP.METHOD.DELETE,
      mode: 'cors',
      headers: {
        ...this.buildHeaders(options.token),
        ...options.headers
      }
    })

    const result: T = await resp.json()
    return result
  }
}
