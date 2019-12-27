<template>
  <div>
    <input-text v-model="username" />
    <input-text v-model="password" password />
    <input-text v-if="withPasswordConfirm" v-model="passwordConfirm" password />
    <button @click="submit">Submit</button>
  </div>
</template>

<script>
import InputText from "../input-text.vue";

export default {
  name: "user-credentials",
  components: { InputText },
  props: {
    withPasswordConfirm: {
      type: Boolean,
      default: true
    }
  },
  data: function() {
    return {
      username: "",
      password: "",
      passwordConfirm: ""
    };
  },
  methods: {
    submit: function() {
      // Password input check
      if (this.withPasswordConfirm && this.password !== this.passwordConfirm) {
        return;
      }

      // Send username/password back
      this.$emit("submit", {
        username: this.username,
        password: this.password
      });

      this.username = "";
      this.password = "";
      this.passwordConfirm = "";
    }
  }
};
</script>

<style lang="scss">
</style>
