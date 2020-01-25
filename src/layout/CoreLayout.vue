<template>
  <div class="al-core-layout">
    <header class="al-core-header">
      <div class="al-core-header-container">
        <nav>
          <router-link :to="{ name: CORE_HOME }">Al-un</router-link>
        </nav>

        <nav>
          <button v-if="token" @click="logout">Logout</button>
          <template v-else>
            <router-link :to="{ name: CORE_USER_REGISTER }"
              >Register</router-link
            >
            <router-link :to="{ name: CORE_USER_LOGIN }">Login</router-link>
          </template>
        </nav>
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
    return { CORE_HOME, CORE_USER_REGISTER, CORE_USER_LOGIN };
  },
  computed: {
    ...mapState(["token"])
  },
  methods: {
    logout: function() {
      this.$store.dispatch(actionsName.logout);
    }
  }
};
</script>

<style lang="scss">
@mixin core-layout-width($width) {
  width: $width;
  max-width: 1000px;
  margin: auto;
}

.al-core-layout {
  .al-core-header {
    box-shadow: 0px $gutter/4 $gutter/2 rgba($color-black, 0.16);

    .al-core-header-container {
      @include core-layout-width(100%);
      @include flexbox-row;
      justify-content: space-between;
      align-items: stretch;

      height: 3 * $gutter;
      // padding: $gutter/2;

      a {
        text-decoration: none;
        // color: var(--color-secondary);
        transition: color 0.2s;

        &:hover {
          color: var(--color-primary-darker);
        }
      }

      & > * {
        @include flexbox-centered();

        & > * {
          padding: 0px $gutter;
          border-right: 1px solid var(--color-primary);
          &:first-child {
            border-left: 1px solid var(--color-primary);
          }
        }
      }
    }

    button {
      @include render-as-link;
    }
  }

  .al-core-body {
    @include core-layout-width(96%);
  }
}
</style>
