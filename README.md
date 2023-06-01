# 一个添加importmap的vite插件

当在开发模式下使用npm包，在生产模式下想要使用CDN，又不需要更改任何代码
使用该插件即可轻松实现

    前提：添加CDN的包需要有支持浏览器的ESM标准

## Installation (yarn or npm)
```
yarn add vite-plugin-add-importmap -D
# or
npm i vite-plugin-add-importmap -D
# or
pnpm install vite-plugin-add-importmap -D
```

## Usage

Options:
* `importmap`：CND的映射表
* `isAdd`：是否添加`importmap`，默认会添加；若不会添加，则置为false


Configuration plugin in vite.config.ts
```
import { defineConfig } from 'vite'
import AddImportmap from 'vite-plugin-add-importmap'

export default defineConfig({
  plugins: [
    // other plugins

    AddImportmap({
        importMap: {
          vue: 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.31/vue.esm-browser.min.js'
        },
        isAdd: true  // 是否是生产环境，可选
    })
  ],

  build: {
    build: {
    rollupOptions: {
      external: ['vue']  // 将对应的包排除在bundle外部
    }
  }
})
```

## Example
**Run**
```
pnpm install

pnpm run build
```

打开`dist/index.html`可看到添加了importmap
```
// 查看最终效果
pnpm preview
```