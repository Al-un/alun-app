import { SetupContext, computed, Ref } from '@vue/composition-api'
import { UnwrapRef } from '@vue/composition-api/dist/reactivity'

import { userApi } from '~/api/user'
import { Credentials } from '~/models/user'

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
