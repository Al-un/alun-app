<template>
  <form class="al-user-credentials" @submit="submit">
    <div v-if="errorMsg.length">{{ errorMsg }}</div>

    <input-text v-model="username" placeholder="Username" />
    <input-text v-model="password" type="password" placeholder="Password" />
    <input-text
      v-if="withPasswordConfirm"
      v-model="passwordConfirm"
      type="password"
      placeholder="Password confirmation"
    />
    <input type="submit" value="Submit" />
  </form>
</template>

<script>
import InputText from "../InputText.vue";

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
      passwordConfirm: "",
      errorMsg: "" // undefined is not responsive?
    };
  },
  methods: {
    submit: function() {
      if (!this.username) {
        this.errorMsg = "Username is a required field";
        return;
      }

      if (!this.password) {
        this.errorMsg = "Password is a required field";
        return;
      }

      // Password input check
      if (this.withPasswordConfirm && this.password !== this.passwordConfirm) {
        this.errorMsg = "Passwords do not match";
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
      this.errorMsg = "";
    }
  }
};
</script>

<style lang="scss">
.al-user-credentials {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
  margin: auto;

  & > * {
    width: 100%;
  }
}
</style>
