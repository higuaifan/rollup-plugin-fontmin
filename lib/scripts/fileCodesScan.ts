/**
 * @Description: scan all document/file in BASE_URL and return all code string
 *               扫描src下的文件并返回所有出现过的字符string
 * @Author: 阿怪
 * @Date: 2022/3/22 10:38 PM
 * @Version v1.0.0
 *
 * 公司的业务千篇一律，复杂的代码好几百行。
 */

import fs from 'fs';
import path from "path";
import type { CodeScanOptionType } from "../../types/rollup-plugin-fontmin";

export const getCodes = async (options?: Partial<CodeScanOptionType>) => {
  const codeSet = new Set<string>();
  const BASE_URL = options && options.baseUrl ? options.baseUrl : './src';
  const fileExt =  options && options.fileExt ? options.fileExt :
    ['.ts', '.js', '.tsx', '.jsx', '.vue', '.scss', '.sass', '.html', '.json'];

  const getFileCodeSet: (newFilePath: string) => Promise<Set<string>> = newFilePath => {
    return new Promise((resolve) => {
      const str = fs.readFileSync(newFilePath, 'utf-8');
      const newSet = new Set(str.split(''));
      resolve(newSet);
    })
  }

  const readFile = (filePath: string) => {
    return new Promise((resolve) => {
      fs.readdir(filePath, async (err, files) => {
        const filePromises = files.map(__filename => {
          // for single document/file name  针对单个文件(夹)名
          return new Promise((resolve) => {
            const newFilePath = path.join(filePath, __filename);
            fs.stat(newFilePath, async (error, stats) => {
              const isFile = stats.isFile();
              if (isFile) {
                if (fileExt.includes(path.extname(newFilePath))) {
                  const newSet = await getFileCodeSet(newFilePath);
                  newSet.forEach(c => {
                    if (!codeSet.has(c)) {
                      codeSet.add(c);
                    }
                  });
                }
                resolve(null);
              } else {
                const isDocument = stats.isDirectory();
                if (isDocument) {
                  resolve(readFile(newFilePath));
                }
              }
              resolve(null);
            })
          })

        }).filter(e => e);
        await Promise.all(filePromises);
        resolve(filePath);
      })
    })
  }

  await readFile(BASE_URL);
  return Array(...codeSet).join('');
}
