# SponteoAI Official Website

上海自在纪元科技有限公司 (SponteoAI) 官方网站

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **国际化**: next-intl (支持中文/英文)

## 开发

### 安装依赖

```bash
npm install
```

### 运行开发服务器

```bash
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本

```bash
npm run build
npm start
```

## 项目结构

```
├── app/
│   ├── [locale]/          # 多语言路由
│   │   ├── page.tsx       # 首页
│   │   ├── about/         # 关于我们页面
│   │   └── contact/       # 联系方式页面
│   ├── layout.tsx         # 根布局
│   └── globals.css        # 全局样式
├── components/            # React 组件
├── messages/             # 国际化翻译文件
│   ├── en.json           # 英文翻译
│   └── zh.json           # 中文翻译
├── i18n.ts               # 国际化配置
└── middleware.ts         # Next.js 中间件（处理语言路由）
```

## 功能特性

- ✅ 响应式设计（支持移动端和桌面端）
- ✅ 中英文双语支持
- ✅ 简约商务风格设计
- ✅ 蓝色和绿色品牌色主题
- ✅ SEO 优化

## 联系方式

- **邮箱**: skye@sponteoai.com
- **网站**: www.sponteoai.com

# sponteoai_official
