/**
 * @Description: test rollup config
 * @Author: 阿怪
 * @Date: 2022/3/25 1:35 AM
 * @Version v1.0.0
 *
 * 公司的业务千篇一律，复杂的代码好几百行。
 */
import { RollupPluginFontmin } from "../lib";
import typescript from "@rollup/plugin-typescript";

export default ({
  input: 'src/main.ts',
  plugins: [typescript(),
    RollupPluginFontmin({
      fontSrc: './src/font/*.*',
      fontDest: './output/font',
      fileExt: ['ts'],
      include: 'src/**/*',
    })],
  output: [{
    file: 'output/bundle.js',
    format: 'es'
  }]
});
