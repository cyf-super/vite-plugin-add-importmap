import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  // 生成类型文件 xxx.d.ts
  dts: true,
  splitting: false,
  sourcemap: false,
  clean: true,
});
