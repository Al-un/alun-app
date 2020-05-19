/**
 * Error happening during an API call
 */
export interface ApiError {
  /**
   * HTTP status code, if any
   */
  status?: number
  /**
   * Internal code
   */
  code?: number
  /**
   * The intercepted error, usually some description if code/status are not
   * available
   */
  error?: any
}

/**
 * Define the different status when a component is interacted with the API
 */
export type ApiCallStatus =
  | 'idle' // just getting started
  | 'loading' // need to get some data
  | 'ready' // data loaded
  | 'processing' // sending a request to the API, wait for completion
  | 'success' // request is a success \o/
  | 'failed' // success failed but the failure is an identified one
  | 'error' // error: something went wrong
