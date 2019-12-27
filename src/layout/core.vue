<template>
  <div class="al-core-layout">
    <header class="al-core-header">
      <router-link :to="{name: CORE_HOME}">Core layout</router-link>

      <div>
        <button v-if="token" @click="logout">Logout</button>
        <template v-else>
          <button @click="register">Register</button>
          <button @click="login">Login</button>
        </template>
      </div>
    </header>
    <main class="al-core-body">
      <slot></slot>
    </main>
  </div>
</template>

<script>
import { mapState } from "vuex";

import { actionsName } from "@/store/root/actions";
import { CORE_HOME, CORE_USER_LOGIN, CORE_USER_REGISTER } from "@/router";

export default {
  name: "core-layout",
  components: {},
  data: function() {
    return { CORE_HOME };
  },
  computed: {
    ...mapState(["token"])
  },
  methods: {
    register: function() {
      this.$router.push({ name: CORE_USER_REGISTER });
    },
    login: function() {
      this.$router.push({ name: CORE_USER_LOGIN });
    },
    logout: function() {
      this.$store.dispatch(actionsName.logout);
    }
  }
};
</script>

<style lang="scss">
.al-core-layout {
  & > .al-core-header {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;

    height: 3 * $gutter;
    padding: $gutter/2;

    border-bottom: 1px solid darkslateblue;
  }

  & > .al-core-body {
    margin: auto;
    width: 96%;
    max-width: 1000px;
  }
}
</style>
