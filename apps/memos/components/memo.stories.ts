import { storiesOf } from '@storybook/vue'

import BoardCard from './BoardCard.vue'

storiesOf('Apps/Memos/Board', module).add('BoardCard', () => ({
  template: `<board-card />`,
  components: { BoardCard }
}))
