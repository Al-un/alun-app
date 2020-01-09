<template>
  <input
    @input="$emit('input', $event.target.value)"
    :value="value"
    :placeholder="placeholder"
    :type="type"
    class="al-input-text"
  />
</template>

<script>
export default {
  name: "input-text",
  props: {
    // Props for the v-model
    value: { type: String, required: true },
    // A label is always visible, regardless the input state. If a label is
    // defined, `placeholder` is ignored
    label: { type: String, required: false },
    // Default placeholder behaviour (hidden upon input)
    placeholder: { type: String, required: false },
    // Custom input type. Default to `text`
    type: { type: String, default: "text" }
  },
  data: function() {
    return {};
  }
};
</script>

<style lang="scss">
.al-input-text {
  margin: $gutter/2;
  padding: $gutter/4;
}
</style>
