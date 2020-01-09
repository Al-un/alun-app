import { configure, addDecorator } from "@storybook/vue";
import { withKnobs } from "@storybook/addon-knobs";

import "../src/styles/main.scss";

addDecorator(withKnobs);
configure(require.context("../src", true, /\.stories\.js$/), module);
