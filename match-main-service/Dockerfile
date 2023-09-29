#使用系统环境
FROM centos:7

# 设置工作目录
WORKDIR /main-service

# 复制 Go 二进制文件到容器中
COPY . /main-service


# 授予 Go 二进制文件执行权限
RUN chmod +x ./main

EXPOSE 4567


#启动 nohup ./main > runoob.log 2>&1 &
CMD [ "nohup", "./main", ">", "runoob.log", "2>&1", "&"]



