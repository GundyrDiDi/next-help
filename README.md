```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## 目录结构
采用 App Router 的模式
Next.js 使用基于文件系统的路由器

```
├── .next  这是Nextjs的缓存目录，在执行dev或者build等命令的时候，会在本地项目的根目录下生成此目录，开发不需要关注。使用缓存/已生成的方式加速编译。
├── src    代码内容
  ├── app 	App Router 应用路由器  (默认情况下， app 内的组件是 React Server 组件。这是一种性能优化)
    ├── layout 	Layout 布局
    ├── page 	Page 页
    ├── not-found 	404 页
  ├── components 	组件
  ├── components 	组件
  └── pages 	Pages Router Pages 路由器
```