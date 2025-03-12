import { definePlugin } from '@tempad-dev/plugins'

import { transformToAtomic } from '../core/index'

export default definePlugin({
  name: '@fubukicss/tailwind',
  code: {
    css: {
      title: 'Tailwind',
      lang: 'text' as 'css',
      transform({ style, options: { useRem } }) {
        return transformToAtomic(style, { engine: 'tailwind', isRem: useRem, prefix: '' }).uno
      },
    },
    js: false,
  },
})
