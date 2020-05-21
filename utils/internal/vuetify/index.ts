import { ApiCallStatus } from '~/models'

/**
 *
 * @param status api call status
 * @returns Vuetify alert type
 * @see https://vuetifyjs.com/en/components/alerts/
 */
export const getAlertTypeApiCallStatus = (
  status: ApiCallStatus
): 'success' | 'info' | 'warning' | 'error' => {
  switch (status) {
    case 'error':
    case 'failed':
      return 'error'
    case 'success':
      return 'success'
    case 'ready':
    case 'loading':
    case 'processing':
    default:
      return 'info'
  }
}
