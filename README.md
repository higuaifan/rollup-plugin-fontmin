# rollup-plugin-fontmin

A rollup plugin to minify font. based on [Fontmin](https://github.com/ecomfe/fontmin).

## QUICK START

### install

> npm install -D @higuaifan/rollup-plugin-fontmin

### usage

```ts
{
  plugins:[RollupPluginFontmin()]
}
```

## API

| key      | type     | description                                   | default                                                                  |
|----------|----------|-----------------------------------------------|--------------------------------------------------------------------------|
| fontSrc  | string   | needs minify fonts file src                   | './public/font/\*.*'                                                     |
| fontDest | string   | minified fonts output file src                | './dist/font'                                                            |
| fileExt  | string[] | scan files extension list, must with code '.' | '.ts', '.js', '.tsx', '.jsx', '.vue', '.scss', '.sass', '.html', '.json' |
| baseUrl  | string   | scan files/document url                       | './src'                                                                  |

## TODO

- [ ] ignore annotate
- [ ] support all Fontmin api
- [ ] fontExt filter smarter(like without code '.')
- [ ] support file ignore
- [ ] make code strong
