<template>
  <div>
    TODO: CoreHome
    <!-- <router-link :to="{name: 'core-user-edit'}">User edit</router-link> -->
    <router-link :to="{ name: 'memo' }">Memo</router-link>

    <div class="tester">
      <div class="primary-lightest"></div>
      <div class="primary-lighter"></div>
      <div class="primary-light"></div>
      <div class="primary"></div>
      <div class="primary-dark"></div>
      <div class="primary-darker"></div>
      <div class="primary-darkest"></div>
      <div class="secondary-lightest"></div>
      <div class="secondary-lighter"></div>
      <div class="secondary-light"></div>
      <div class="secondary"></div>
      <div class="secondary-dark"></div>
      <div class="secondary-darker"></div>
      <div class="secondary-darkest"></div>
    </div>

    <h2>Counter</h2>
    <counter />
  </div>
</template>

<script>
import Counter from "@/components/Counter.vue";

export default {
  name: "home",
  components: { Counter },
  data: function() {
    return {};
  }
};
</script>

<style lang="scss">
%tester-block {
  width: 120px;
  height: 120px;
  margin: 16px;
  border: 1px solid black;
  flex-shrink: 0;
}

.tester {
  display: flex;
  flex-wrap: wrap;

  @each $color-name, $color-value in $color-palettes {
    @each $variant-name, $variant-value in $color-variants {
      @if $variant-name == base {
        .#{$color-name} {
          @extend %tester-block;
          background-color: var(--color-#{$color-name});
        }
      } @else {
        .#{$color-name}-#{$variant-name} {
          @extend %tester-block;
          background-color: var(--color-#{$color-name}-#{$variant-name});
        }
      }
    }
  }
}
</style>
