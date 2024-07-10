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
      highlight: '#64a9f2',
      bl1: '#66adf3',
      gr1: '#23f1a3',
      cgray: '#d0d0dc',
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
    ['bggar', 'from-#23f1a3 to-#66adf3 bg-gradient-to-r'],
    ['tgar1', 'inline-block from-#21d0f2 to-#8f4bda bg-gradient-to-r bg-clip-text text-transparent'],
    ['tgar2', 'inline-block from-#23f1a3 to-#66adf3 bg-gradient-to-r bg-clip-text text-transparent'],

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
