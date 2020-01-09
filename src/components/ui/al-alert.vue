<template>
  <div class="al-alert" :class="`al-alert-${level}`">
    <div v-if="title && title.length" class="al-alert-title">{{ title }}</div>
    <div class="al-alert-body"><slot></slot></div>
  </div>
</template>

<script>
const LEVELS = ["error", "warning", "info", "success"];

export default {
  name: "al-alert",
  components: {},
  props: {
    level: {
      type: String,
      default: "info",
      validator: value => LEVELS.includes(value)
    },
    title: {
      type: String,
      required: false
    }
  },
  data: function() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style lang="scss">
// To move?
$alert-levels: ("error", "warning", "info", "success");

.al-alert {
  margin: $gutter/2;
  padding: $gutter/4;

  @each $level-name in $alert-levels {
    &.al-alert-#{$level-name} {
      background-color: var(--color-#{$level-name});
      border-left: 4px solid var(--color-#{$level-name}-darker);
    }
  }
}
</style>
