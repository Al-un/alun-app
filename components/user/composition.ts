import { SetupContext, computed, Ref, ref } from '@vue/composition-api'
import { UnwrapRef } from '@vue/composition-api/dist/reactivity'

import { userApi } from '~/api/user'
import {
  ApiCallStatus,
  ApiErrorOr,
  Credentials,
  LoginAPISuccess,
  ApiError
} from '~/models'
import { API } from '~/constants'
import { getAlertTypeApiCallStatus } from '~/utils'

const useUserAuthFormBase = () => {
  const status = ref<ApiCallStatus>('idle')
  const alertType = computed(() => getAlertTypeApiCallStatus(status.value))
  const isFormValid = ref(false)

  return { status, alertType, isFormValid }
}

export const useLogin = (
  ctx: SetupContext,
  credentials: UnwrapRef<Credentials>
) => {
  const { status, alertType, isFormValid } = useUserAuthFormBase()

  const submit = async () => {
    try {
      status.value = 'processing'
      const result = await userApi.login(credentials)

      // Yeah \o/
      const resOk = result as LoginAPISuccess
      if (resOk.token) {
        ctx.root.$store.dispatch('saveToken', resOk.token)
        status.value = 'success'

        const nextPage = (ctx.root.$route.query.nextPage as string) || '/'

        window.setTimeout(() => {
          ctx.root.$router.replace({ path: nextPage })
        }, 1000)
        return
      }

      // Try again!
      const resErr = result as ApiError
      if (API.MSGS.USER_LOGIN_FAILED === resErr.code) {
        status.value = 'failed'
        return
      }

      // WTF error
      status.value = 'error'
    } catch (err) {
      status.value = 'error'
    }
  }

  return {
    submit,
    status,
    alertType,
    isFormValid
  }
}

export const useRegister = (email: Ref<string>) => {
  const { status, alertType, isFormValid } = useUserAuthFormBase()

  const submit = async () => {
    try {
      status.value = 'processing'
      const result: ApiErrorOr<undefined> = await userApi.register(email.value)

      if (!result) {
        status.value = 'success'
        return
      }

      if (API.MSGS.USER_EMAIL_ALREADY_TAKEN === result.code) {
        status.value = 'failed'
      } else {
        status.value = 'error'
      }
    } catch (err) {
      status.value = 'error'
    }
  }

  return { status, submit, alertType, isFormValid }
}

export const usePasswordRequest = (email: Ref<string>) => {
  const { status, alertType, isFormValid } = useUserAuthFormBase()

  const submit = async () => {
    try {
      status.value = 'processing'
      const result: ApiErrorOr<undefined> = await userApi.requestResetPassword(
        email.value
      )

      if (!result) {
        status.value = 'success'
        return
      }

      status.value = 'error'
    } catch (err) {
      status.value = 'error'
    }
  }

  return { status, submit, alertType, isFormValid }
}

export const usePasswordUpdate = (
  ctx: SetupContext,
  password: Ref<string>,
  username: Ref<string>
) => {
  const { status, alertType, isFormValid } = useUserAuthFormBase()

  const isNewUser = ctx.root.$route.query.requestType
    ? ctx.root.$route.query.requestType === '1'
    : false

  const submit = async () => {
    const token = ctx.root.$route.query.t as string

    try {
      status.value = 'processing'
      const result: ApiErrorOr<undefined> = await userApi.updatePassword(
        token,
        password.value,
        username.value ? username.value : undefined
      )

      if (!result) {
        status.value = 'success'
        return
      }

      status.value = 'error'
    } catch (err) {
      status.value = 'error'
    }
  }

  return { status, submit, alertType, isFormValid, isNewUser }
}
