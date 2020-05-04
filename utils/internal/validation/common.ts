import { FormInputChecker } from '~/models/internal'

/**
 * @param val A value which must be defined
 */
export const valRequired: FormInputChecker = (val) => !!val

/**
 * @param minLength the minimum length (non-strict equal) required for the value
 */
export const valMinLength: FormInputChecker = (
  val: string,
  minLength: number
) => val.length >= minLength

/**
 * @param maxLength the maximum length (non-strict equal) required for the value
 */
export const valMaxLength: FormInputChecker = (
  val: string,
  maxLength: number
) => val.length <= maxLength
