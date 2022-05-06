/**
 * @Description: plugin
 * @Author: 阿怪
 * @Date: 2022/3/25 1:22 AM
 * @Version v1.0.0
 *
 * 公司的业务千篇一律，复杂的代码好几百行。
 */
import { getCodes } from "./scripts/getCodes";
import type { OptionType } from "../types/rollup-plugin-fontmin";

const BASE_SRC = './public/font/*.*';
const BASE_DIST = './dist/font';
const Fontmin = require('fontmin');

const fileScanAndFontmin = async (pluginOption?: OptionType) => {
  getCodes(pluginOption).then(text => {
    new Fontmin()
      .src(pluginOption && pluginOption.fontSrc ? pluginOption.fontSrc : BASE_SRC)
      .use(Fontmin.glyph({ text }))
      .dest(pluginOption && pluginOption.fontDest ? pluginOption.fontDest : BASE_DIST)
      .run();
  });
}

export default function RollupPluginFontmin(pluginOption?: OptionType) {
  return {
    name: 'rollup-plugin-fontmin',
    writeBundle: () => {
      fileScanAndFontmin(pluginOption);
    }
  }
}

export { fileScanAndFontmin, getCodes };
