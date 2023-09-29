const util = require('util');
const exec = util.promisify(require('child_process').exec);
const { open } = require('fs');
const path = require('path');
const colors = {
  reset: "\x1b[0m",
  // 带颜色的示例
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
};
//等待
const sleep = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}
(async () => {
  try {
    //传入1个name 1个command,执行command,查找是否存在name,返回结果
    const find = async (name, command) => {
      try {
        const { stdout } = await exec(command);
        if (stdout.includes('No such')) return false;
        if (stdout.includes(name)) return stdout;
        return false;
      } catch (error) {
        if (typeof error === 'object') {
          const strerr = JSON.stringify(error, null, 2)
          if (strerr.includes('No such')) return false;
          console.log(strerr);
        } else {
          console.log('error 类型:', typeof error, '\n', 'error 值:', error);
        }

        throw error
      }
    }
    //安装mysql 5.7.43
    const installMysql = async () => {
      try {
        const { stdout } = await exec('docker pull mysql:5.7.43');
        log('安装mysql 5.7.43', stdout);
      } catch (error) {
        throw error
      }
    }
    //安装redis
    const installRedis = async () => {
      try {
        const { stdout } = await exec('docker pull redis');
        log('安装redis', stdout);
      } catch (error) {
        throw error
      }
    }
    //安装nginx
    const installNginx = async () => {
      try {
        const { stdout } = await exec('docker pull nginx');
        log('安装nginx', stdout);
      } catch (error) {
        throw error
      }
    }
    await installMysql();
    await installRedis();
    await installNginx();
    //结束
    console.log(colors.blue + '结束' + colors.reset);
  } catch (error) {
    console.log(error);
    //退出进程
    process.exit(1);
  }
})();