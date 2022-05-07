# rollup-plugin-fontmin

![npm](https://img.shields.io/npm/v/@higuaifan/rollup-plugin-fontmin?color=%23c50315&style=flat-square)
[![codecov](https://codecov.io/gh/higuaifan/rollup-plugin-fontmin/branch/master/graph/badge.svg?token=41338I1T1D)](https://codecov.io/gh/higuaifan/rollup-plugin-fontmin)

A rollup plugin to minify font. based on [Fontmin](https://github.com/ecomfe/fontmin).

## QUICK START

### install

> npm install -D @higuaifan/rollup-plugin-fontmin

### usage

#### vite

```typescript
{
  plugins:[ RollupPluginFontmin() ]
}
```

#### nuxt 

```typescript
import { defineNuxtModule } from "@nuxt/kit";
import { fileScanAndFontmin } from '@higuaifan/rollup-plugin-fontmin';

export default defineNuxtModule({
  async setup(options, nuxt) {
    nuxt.hook('close', async () => {
      await fileScanAndFontmin({});
    });
  }

})

```

## API

| key      | type               | description                                                                     | default                                                         |
|----------|--------------------|---------------------------------------------------------------------------------|-----------------------------------------------------------------|
| fontSrc  | string             | needs minify fonts file src                                                     | './public/font/\*.*'                                            |
| fontDest | string             | minified fonts output file src                                                  | './dist/font'                                                   |
| include  | string[] or string | scan folders or files based on [fast-glob](https://github.com/mrmlnc/fast-glob) | 'src/**/*'                                                      |
| fileExt  | string[] or string | scan files extension list                                                       | 'ts', 'js', 'tsx', 'jsx', 'vue', 'scss', 'sass', 'html', 'json' |
| exclude  | string[] or string | exclude folders or files                                                        | ''                                                              |

## TODO

- [ ] ignore annotate
- [ ] support all Fontmin api
- [ ] make code strong
