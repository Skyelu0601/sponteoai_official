# 部署指南 - 将网站绑定到 www.sponteoai.com

## 推荐方案：使用 Vercel（最简单）

Vercel 是 Next.js 的官方平台，部署最简单，且提供免费套餐。

### 步骤 1: 准备代码仓库

1. 在 GitHub/GitLab/Bitbucket 创建代码仓库
2. 将代码推送到仓库：

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <你的仓库地址>
git push -u origin main
```

### 步骤 2: 在 Vercel 部署

1. 访问 [vercel.com](https://vercel.com) 并注册/登录
2. 点击 "Add New Project"
3. 导入你的 Git 仓库
4. Vercel 会自动检测 Next.js 项目
5. 点击 "Deploy" 完成部署

### 步骤 3: 配置域名

1. 在 Vercel 项目设置中，进入 "Domains" 页面
2. 添加域名：`www.sponteoai.com`
3. 如果需要，也可以添加 `sponteoai.com`（不带www）

### 步骤 4: 配置 DNS

在你的域名注册商（如阿里云、腾讯云、GoDaddy等）的 DNS 设置中添加以下记录：

#### 选项 A: 使用 CNAME（推荐）

```
类型: CNAME
主机记录: www
记录值: cname.vercel-dns.com
TTL: 3600（或默认值）
```

#### 选项 B: 使用 A 记录

```
类型: A
主机记录: www
记录值: 76.76.21.21（Vercel的IP，可能变化，请查看Vercel文档）
TTL: 3600
```

### 步骤 5: 等待 DNS 生效

DNS 生效通常需要几分钟到几小时。你可以使用以下命令检查：

```bash
# 检查DNS解析
nslookup www.sponteoai.com

# 或使用dig
dig www.sponteoai.com
```

### 步骤 6: 验证部署

DNS 生效后，访问 `https://www.sponteoai.com` 应该能看到你的网站。

---

## 其他部署方案

### 方案 2: 使用自己的服务器

如果你有自己的服务器（如阿里云、腾讯云等），可以：

#### 1. 构建生产版本

```bash
npm run build
npm start
```

#### 2. 使用 Nginx 作为反向代理

安装 Nginx 后，创建配置文件 `/etc/nginx/sites-available/sponteoai`：

```nginx
server {
    listen 80;
    server_name www.sponteoai.com sponteoai.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

#### 3. 启用 HTTPS（使用 Let's Encrypt）

```bash
# 安装 certbot
sudo apt-get install certbot python3-certbot-nginx

# 获取SSL证书
sudo certbot --nginx -d www.sponteoai.com -d sponteoai.com
```

#### 4. 配置 DNS A 记录

在你的域名注册商处添加：

```
类型: A
主机记录: www
记录值: 你的服务器IP地址
TTL: 3600
```

### 方案 3: 使用 Docker 部署

创建 `Dockerfile`：

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

更新 `next.config.js` 以支持 standalone 输出：

```javascript
const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig = {
  output: 'standalone'
};

module.exports = withNextIntl(nextConfig);
```

---

## 重要提示

1. **HTTPS**: 现代网站必须使用 HTTPS。Vercel 自动提供免费 SSL 证书。如果自己部署，务必配置 SSL。

2. **环境变量**: 如果有环境变量，需要在部署平台配置。

3. **性能优化**: 
   - 确保 `npm run build` 成功
   - 检查构建输出是否有警告

4. **域名备案**: 如果服务器在中国大陆，需要完成域名备案。

5. **CDN**: 考虑使用 CDN 加速（Vercel 已包含全球 CDN）。

---

## 推荐流程

对于你的情况，我强烈推荐使用 **Vercel**：
- ✅ 完全免费（个人项目）
- ✅ 自动 HTTPS
- ✅ 全球 CDN
- ✅ 自动部署（Git push 即部署）
- ✅ 零配置
- ✅ 完美支持 Next.js

只需：
1. 将代码推送到 GitHub
2. 在 Vercel 导入项目
3. 添加域名
4. 配置 DNS
5. 完成！

