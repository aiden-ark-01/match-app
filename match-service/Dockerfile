# 使用 Node.js 14 作为基础镜像
FROM node:18.16.0

# 环境变量
ENV NODE_ENV=production
ENV CONFIG_KEY=matchTestSecretObject
ENV I_ENV=test
ENV BASE_URL=192.168.1.10
ENV BASE_PORT=4567
ENV SQL_HOST=3.27.120.189

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json 到容器
COPY package*.json ./

# 安装项目依赖
RUN yarn

# 复制构建后的应用程序代码到容器
COPY . .

# 暴露应用程序的端口
EXPOSE 3000

# 启动应用程序
CMD ["node", "main.js"]
