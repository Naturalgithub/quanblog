# 使用 Node.js 22 作为基础镜像
FROM node:22-alpine

# 设置工作目录
WORKDIR /app

# 安装系统依赖和 AWS CLI
RUN apk update && apk add --no-cache \
    git \
    python3 \
    py3-pip \
    curl \
    wget \
    && pip3 install awscli

# 安装 pnpm
RUN npm install -g pnpm@latest --registry=https://registry.npmmirror.com && \
    pnpm config set registry https://registry.npmmirror.com

# 复制 package.json 和 pnpm-lock.yaml (如果存在)
COPY package.json ./
COPY pnpm-lock.yaml* ./

# 安装依赖
RUN pnpm install

# 复制所有源代码
COPY . .

# 构建应用
RUN pnpm build

# 添加上传脚本
COPY upload-to-w3.sh /app/upload-to-w3.sh
RUN chmod +x /app/upload-to-w3.sh

# 设置环境变量
ENV DIST_DIR=/app/docs/.vitepress/dist
ENV S3_BUCKET=115-web
ENV S3_PREFIX=blog/
ENV S3_ENDPOINT=http://home.yuanquanke.cn:35246
