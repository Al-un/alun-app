import { SetupContext, computed, Ref, ref } from '@vue/composition-api'
import { UnwrapRef } from '@vue/composition-api/dist/reactivity'

import { userApi } from '~/api/user'
import { Credentials } from '~/models/user'
import { ApiCallStatus, ApiErrorOr } from '~/models'
import { API } from '~/constants'

export const useLogin = (
  ctx: SetupContext,
  credentials: UnwrapRef<Credentials>
) => {
  const status = computed(() => ctx.root.$store.state.user.loginStatus)

  const submit = async () => {
    await ctx.root.$store.dispatch('user/login', {
      email: credentials.email,
      password: credentials.password
    })
  }

  return {
    submit,
    status
  }
}

export const useRegister = (email: Ref<string>) => {
  const status = ref<ApiCallStatus>('idle')

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
      console.warn('TODO ERROR:', err)
    }
  }

  return { status, submit }
}

export const usePasswordRequest = (email: Ref<string>) => {
  const request = async () => {
    try {
      await userApi.requestResetPassword(email.value)
    } catch (err) {
      console.warn('TODO ERROR', err)
    }
  }

  return { request }
}

export const usePasswordUpdate = (ctx: SetupContext, password: Ref<string>) => {
  const update = async () => {
    const token = ctx.root.$route.query.t as string

    try {
      await userApi.updatePassword(token, password.value)
    } catch (err) {
      console.warn('TODO ERROR', err)
    }
  }

  return { update }
}
