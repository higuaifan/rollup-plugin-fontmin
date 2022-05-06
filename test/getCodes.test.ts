/**
 * @description fileCodeScan test
 * @author 阿怪
 * @date 2022/5/6 09:48
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */

import { describe, test, expect } from 'vitest';
import { getCodes } from "../lib";

describe('test getCodes', () => {

  test('get codes', async () => {
    const res = await getCodes({
      include: 'test/example/**'
    });
    expect(res.split('').sort().join('')).toMatchInlineSnapshot(`
      "
       '()*,./012568:;@acdefghilmnoprstuvwy{}。一业代件你几务千复好律怪文是杂江湖百的码篇行这阿，"
    `);
  })


});
