# 使用官方的 Nginx 镜像作为基础镜像
FROM nginx

# 删除默认的 Nginx 配置文件
RUN rm /etc/nginx/conf.d/default.conf

# 复制你的自定义 Nginx 配置文件到容器中
COPY default.conf /etc/nginx/conf.d/

# 删除 Nginx 默认的网站根目录下的所有文件
RUN rm -rf /usr/share/nginx/html/*

# 将前端项目文件复制到 Nginx 默认的网站根目录
COPY . /usr/share/nginx/html

# 暴露容器的端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]
