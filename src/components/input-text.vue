<template>
  <input
    @input="$emit('input', $event.target.value)"
    :value="value"
    :placeholder="placeholder"
    :type="inputType"
  />
</template>

<script>
export default {
  name: "input-text",
  props: {
    value: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: false
    },
    password: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    inputType: function() {
      return this.password ? "password" : "text";
    }
  },

  data: function() {
    return {};
  }
};
</script>

<style lang="scss">
input {
  padding: $gutter/4;
}
</style>
