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
       !\\"#'()*,-./012568:;<=>@CDEFHLMOPTUYabcdefghiklmnoprstuvwxy{}。一业代件你几务千复好律怪文是杂江测湖百的码篇行试这阿面页，"
    `);
  });

  test('without options', async () => {
    const res = await getCodes();
    expect(res.split('').sort().join('')).toMatchInlineSnapshot(`
      "
       \\"'()*,-./012345:;=@ADEFMPRSV[]abcdefghijlmnoprstuvxy{}。一业代你公几凡务千司复好律怪杂百的码篇行阿，"
    `);
  })

  test('without empty include', async () => {
    const res = await getCodes({ include: undefined });
    expect(res.split('').sort().join('')).toMatchInlineSnapshot(`
      "
       \\"'()*,-./012345:;=@ADEFMPRSV[]abcdefghijlmnoprstuvxy{}。一业代你公几凡务千司复好律怪杂百的码篇行阿，"
    `);
  })


});
