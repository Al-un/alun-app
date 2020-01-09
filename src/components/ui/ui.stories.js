import Vue from "vue";
import AlAlert from "./al-alert.vue";
import { storiesOf } from "@storybook/vue";
import { select, text } from "@storybook/addon-knobs";

storiesOf("UI", module).add("Alert", () => ({
  components: { AlAlert },
  props: {
    level: {
      default: select("Level", ["error", "warning", "info", "success"], "info")
    },
    title: { default: text("Title", "") },
    message: { default: text("Message", "Alert message here") }
  },
  template: `<al-alert :level="level" :title="title">{{ message }}</al-alert>`
}));
