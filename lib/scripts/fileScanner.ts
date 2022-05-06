/**
 * @description file scanner
 * @author 阿怪
 * @date 2022/5/6 08:24
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import FastGlob from "fast-glob";
import type { CodeScanOptionType } from "../../types/rollup-plugin-fontmin";


const FILE_EXT = ['ts', 'js', 'tsx', 'jsx', 'vue', 'scss', 'sass', 'html', 'json'];

const toStringArray = (str: string | string[]): string[] => {
  if (typeof str === 'string') {
    return [str];
  }
  return str;
}

const toFixExt = (fileUrls: string | string[], fileExt: string) => {
  return toStringArray(fileUrls).map(i => {
    if (i.includes('.')) {
      return i;
    }
    return `${i}.${fileExt}`;
  })
}

const getFileExt = (fileExt?: string | string[]): string => {
  if (!fileExt) {
    return `{${FILE_EXT.join(',')}}`;
  }
  if (fileExt instanceof Array) {
    if (fileExt.length === 0) {
      return '*';
    }
    if (fileExt.length === 1) {
      return fileExt[0];
    }
  }
  return `{${toStringArray(fileExt).join(',')}}`;
}

/**
 * @description get all request files
 * @param options scannerOption
 */
export const fileScanner = async (options: CodeScanOptionType) => {
  const fileExt = getFileExt(options.fileExt);
  const includes = toFixExt(options.include, fileExt);
  const excludes = options.exclude ? toFixExt(options.exclude, fileExt) : [];
  return await FastGlob(includes, { ignore: excludes });
}
