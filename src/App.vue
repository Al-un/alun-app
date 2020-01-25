<template>
  <div id="app">
    <component :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script>
import { mapState } from "vuex";

import CoreLayout from "./layout/CoreLayout.vue";
import MemoLayout from "./layout/MemoLayout.vue";

export default {
  name: "app",
  components: {
    CoreLayout,
    MemoLayout
  },
  computed: {
    ...mapState(["isLogged"]),
    layout: function() {
      const routeName = this.$route.name;

      if (routeName && routeName.startsWith("memo")) {
        return "memo-layout";
      } else {
        return "core-layout";
      }
    }
  }
};
</script>

<style lang="scss"></style>
