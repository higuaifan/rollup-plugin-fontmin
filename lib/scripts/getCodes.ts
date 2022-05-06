/**
 * @Description: scan all document/file and return all code string
 *               扫描所有指定文件并返回所有出现过的字符string
 * @Author: 阿怪
 * @Date: 2022/3/22 10:38 PM
 * @Version v1.0.0
 *
 * 公司的业务千篇一律，复杂的代码好几百行。
 */

import fs from 'fs';
import type { CodeScanOptionType } from "../../types/rollup-plugin-fontmin";
import { fileScanner } from "./fileScanner";

const BASE_URL = 'src/**/*';

export const getCodes = async (options?: CodeScanOptionType) => {
  const codeSet = new Set<string>();

  if (!options) {
    options = { include: BASE_URL };
  }
  if (!options.include) {
    options.include = BASE_URL;
  }

  const getFileCodeSet: (newFilePath: string) => Promise<Set<string>> = newFilePath => {
    return new Promise((resolve) => {
      const str = fs.readFileSync(newFilePath, 'utf-8');
      const newSet = new Set(str.split(''));
      resolve(newSet);
    })
  }

  const setCodeSet = async () => {
    const files = await fileScanner(options!);
    const setters = files.map(filePath => new Promise(async (resolve) => {
      const newSet = await getFileCodeSet(filePath);
      newSet.forEach(c => {
        if (!codeSet.has(c)) {
          codeSet.add(c);
        }
      });
      resolve(true);
    }))

    await Promise.all(setters);
  }

  await setCodeSet();
  return Array(...codeSet).join('');
}
