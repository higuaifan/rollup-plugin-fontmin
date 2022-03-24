/**
 * @Description: plugin types
 * @Author: 阿怪
 * @Date: 2022/3/25 2:00 AM
 * @Version v1.0.0
 *
 * 公司的业务千篇一律，复杂的代码好几百行。
 */

import { Plugin } from "rollup";

export type OptionType = {
  fontSrc: string,
  fontDest: string,
} & CodeScanOptionType

export type CodeScanOptionType = {
  fileExt: string[],
  baseUrl: string
}

declare function RollupPluginFontmin(pluginOption?: Partial<OptionType>): Plugin;
export default RollupPluginFontmin;
