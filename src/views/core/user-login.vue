<template>
  <div>
    <user-credentials @submit="registerUser" :withPasswordConfirm="false" />
  </div>
</template>

<script>
import UserCredentials from "../../components/core/user-credentials.vue";
import { actionsName } from "../../store/root/actions";

export default {
  name: "user-register",
  components: { UserCredentials },
  data: function() {
    return {};
  },
  methods: {
    registerUser: function({ username, password }) {
      this.$store.dispatch(actionsName.login, { username, password });
    }
  }
};
</script>

<style lang="scss">
</style>
