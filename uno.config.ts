import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders';
import type {
  CSSEntries, UtilObject,
} from 'unocss';
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  content: {
    pipeline: {
      include: [/\.ts$/,
        /\.vue$/,
        /\.vue\?vue/], // .vue]
      exclude: ['node_modules', 'dist', '.git', '.vscode'],
    },
  },
  safelist: ['bg-info', 'bg-danger', 'bg-warning', 'bg-success', 'bg-white'],
  theme: {
    colors: {
      abd: '#555555', // app border,
      highlight: '#407bbf',
      primary: '#1677ff',
      secondary: '#64748B',
      success: '#5cb85c',
      info: '#1677ff',
      warning: '#faad14',
      danger: '#ff4d4f',
      hint: '#94a3b8',
      disabled: '#e2e8f0',
    },
    breakpoints: {
      'xs': '0px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  shortcuts: [
    // Flex
    ['flex-center', 'flex items-center justify-center'],
    ['flex-btw-center', 'flex items-center justify-between'],
    // Grid
    ['grid-center', 'grid items-center justify-items-center'],
    // Text
    ['text-spotlight', 'font-600 text-15'],
    ['text-desc', 'text-gray'],
    // Utility
    ['clickable', 'cursor-pointer text-info/90 font-500 hover:text-info'],
  ],
  postprocess: (util: UtilObject) => {
    // 1 => 0.1rem (ex: p-1)
    {
      const remRegex = /(-?[\.\d]+)rem/g;
      util.entries.forEach((i: [string, string | number | undefined]) => {
        const value = i[1];

        if (value && typeof value === 'string' && remRegex.test(value))
          i[1] = value.replace(remRegex, (_: string, p1: string) => `${(+p1 * 4) / 10}rem`);
      });
    }

    // 1rpx => 1rem (ex: p-1rpx)
    {
      const rpxRE = /(-?[\.\d]+)rpx/g;

      util.entries.forEach((i: [string, string | number | undefined]) => {
        const value = i[1];

        if (value && typeof value === 'string' && rpxRE.test(value))
          i[1] = value.replace(rpxRE, (_: string, p1: string) => `${p1}rem`);
      });
    }
  },
  variants: [
    // i_rule to make it !important (ex: i_p-1)
    (matcher: string) => {
      if (!matcher.startsWith('i_'))
        return matcher;

      return {
        matcher: matcher.slice(2),
        body: (body: CSSEntries) => {
          body.forEach((v: [string, string | number | undefined]) => {
            if (v[1])
              v[1] += ' !important';
          });

          return body;
        },
      };
    },
  ],
  presets: [
    presetUno(),
    presetIcons({
      collections: { svg: FileSystemIconLoader('./src/assets/svg', (svg: string) => svg) },
      warn: true,
      extraProperties: {
        'display': 'inline-block',
        'height': '1.2em',
        'width': '1.2em',
        'vertical-align': 'text-bottom',
      },
    }),
    presetAttributify(),
  ],

  transformers: [transformerDirectives(), transformerVariantGroup()],
});
