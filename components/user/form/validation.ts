import { FormInputChecker } from '~/models/internal'

export const valEmailValid: FormInputChecker = (val: string) => {
  return !!val
}
