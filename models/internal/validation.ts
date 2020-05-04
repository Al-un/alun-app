/**
 * Checks an input of an expected type
 */
export type FormInputChecker = (val: any, ...args: any[]) => boolean

/**
 * Associate an input checker with an error message
 */
export interface FormInputValidator {
  check: FormInputChecker
  msg: string
  args?: any[]
}
