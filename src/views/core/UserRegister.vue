<template>
  <div>
    <user-credentials @submit="registerUser" />
  </div>
</template>

<script>
import UserCredentials from "@/components/core/UserCredentials.vue";
// import { actionsName } from "@/store/root/actions";
import { rootActionsName } from "@/store";
import RedirectAfter from "@/views/core/abstract/RedirectAfter.vue";

export default {
  name: "user-register",
  extends: RedirectAfter,
  components: { UserCredentials },
  methods: {
    registerUser: function({ username, password }) {
      this.$store.dispatch(rootActionsName.createUser, { username, password });
    }
  }
};
</script>

<style lang="scss">
</style>
