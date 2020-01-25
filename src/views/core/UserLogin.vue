<template>
  <div>
    <user-credentials @submit="registerUser" :withPasswordConfirm="false" />
  </div>
</template>

<script>
import { rootActionsName } from "@/store";
import RedirectAfter from "@/views/core/abstract/RedirectAfter.vue";

export default {
  name: "user-register",
  extends: RedirectAfter,
  methods: {
    registerUser: async function({ username, password }) {
      await this.$store.dispatch(rootActionsName.login, { username, password });
    }
  }
};
</script>

<style lang="scss">
</style>
