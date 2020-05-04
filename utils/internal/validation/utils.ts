import { FormInputChecker, FormInputValidator } from '~/models/internal'
import { InputValidationRule } from 'vuetify/types'
import { SetupContext } from '@vue/composition-api'

// Local types for clarity
type LocalRules = { [key: string]: FormInputValidator[] }
type LocalRuleConverter = (
  ctx: SetupContext,
  fiv: FormInputValidator
) => InputValidationRule
type VuetifyRules = { [key: string]: InputValidationRule[] }

export const convertInputValidation: LocalRuleConverter = ({ root }, fiv) => (
  val: any
) => {
  return fiv.check(val, fiv.args) || (root.$i18n.t(fiv.msg, fiv.args) as string)
}

export const convertInputRulesMap: (
  ctx: SetupContext,
  rules: LocalRules
) => VuetifyRules = (ctx, rules) => {
  const convertedRules: { [key: string]: InputValidationRule[] } = {}

  Object.entries(rules).forEach((entry) => {
    const key = entry[0]
    const validators = entry[1]

    convertedRules[key] = validators.map((fiv) =>
      convertInputValidation(ctx, fiv)
    )
  })

  return convertedRules
}

export const convertInputRulesArray: (
  ctx: SetupContext,
  validators: FormInputValidator[]
) => InputValidationRule[] = (ctx, validators) =>
  validators.map((fiv) => convertInputValidation(ctx, fiv))
