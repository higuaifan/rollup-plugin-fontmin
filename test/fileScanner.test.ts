/**
 * @description fileScanner test
 * @author 阿怪
 * @date 2022/5/6 08:25
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import { describe, test, expect } from 'vitest';
import { fileScanner } from "../lib/scripts/fileScanner";

describe('test fileScanner', () => {

  test('use default option', async () => {
    const res = await fileScanner({
      include: 'test/example/**/*'
    });
    expect(res).toMatchInlineSnapshot(`
      [
        "test/example/demo.scss",
        "test/example/demo.ts",
        "test/example/src/DemoVue.vue",
      ]
    `);
  });

  test('get every ext files', async () => {
    const res = await fileScanner({
      include: 'test/example/**/*',
      fileExt: []
    });
    expect(res).toMatchInlineSnapshot(`
      [
        "test/example/demo.scss",
        "test/example/demo.ts",
        "test/example/doc/demo.md",
        "test/example/src/DemoVue.vue",
      ]
    `);
  });

  test('set folder', async () => {
    const res = await fileScanner({
      include: 'test/example/**/src/*',
      fileExt: []
    });
    expect(res).toMatchInlineSnapshot(`
      [
        "test/example/src/DemoVue.vue",
      ]
    `);
  });

  test('set ext', async () => {
    const res = await fileScanner({
      include: 'test/example/**/*',
      fileExt: ['ts']
    });
    expect(res).toMatchInlineSnapshot(`
      [
        "test/example/demo.ts",
      ]
    `);
  });

  test('exclude folder', async () => {
    const res = await fileScanner({
      include: 'test/example/**/*',
      exclude: 'test/example/src/*'
    });
    expect(res).toMatchInlineSnapshot(`
      [
        "test/example/demo.scss",
        "test/example/demo.ts",
      ]
    `);
  });

  test('exclude file', async () => {
    const res = await fileScanner({
      include: 'test/example/**/*',
      exclude: '**/DemoVue.vue'
    });
    expect(res).toMatchInlineSnapshot(`
      [
        "test/example/demo.scss",
        "test/example/demo.ts",
      ]
    `);
  });

});
