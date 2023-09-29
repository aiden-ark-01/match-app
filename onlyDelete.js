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
//传入一个命令和一个结果,输出命令和结果,使用黄色输出命令,绿色输出结果
const log = (command, result) => {
  // console.log('\x1b[33m%s\x1b[0m', '执行命令: ', command, '\n');
  // console.log('\x1b[32m%s\x1b[0m', '返回结果: \n', result, '\n');
  console.log(colors.yellow + '执行命令: \n' + command + colors.reset);
  console.log(colors.green + '返回结果: \n' + result + colors.reset);
}
(async () => {
  try {
    //先检查container ls ,images ls, service ls, stack ls,
    const check = async () => {
      try {
        const { stdout } = await exec('docker container ls');
        log('检查container ls', stdout);
        const { stdout: stdout2 } = await exec('docker images ls');
        log('检查images ls', stdout2);
        const { stdout: stdout3 } = await exec('docker service ls');
        log('检查service ls', stdout3);
        const { stdout: stdout4 } = await exec('docker stack ls');
        log('检查stack ls', stdout4);
      } catch (error) {
        throw error
      }
    }
    await check();

    //传入1个name 1个command,执行command,查找是否存在name,返回结果
    const find = async (name, command) => {
      try {
        const { stdout } = await exec(command);
        if (stdout.includes('No such')) return false;
        if (stdout.includes(name)) return stdout;
        return false;
      } catch (error) {

        if (typeof error === 'object') {
          const strerr = JSON.stringify(JSON.stringify(error))
          if (strerr.includes('such')) return false;
          console.log('find',strerr);
        } else {
          console.log('error 类型:', typeof error, '\n', 'error 值:', error);
        }
        console.log('find:', error);
        throw error
      }
    }

    const runDelete = async (name, command) => {
      try {
        const { stdout } = await exec(command);
        if (stdout.includes('No such')) return stdout;
        if (stdout.includes(name)) return stdout;
        return false;
      } catch (error) {
        if (typeof error === 'object') {
          const strerr = JSON.stringify(error, null, 2)
          if (strerr.includes('No such')) return false;
          console.log('runDelete',strerr);
        } else {
          console.log('error 类型:', typeof error, '\n', 'error 值:', error);
        }
        console.log('runDelete:', error);
        throw error
      }
    }

    //获取当前目录的相对路径
    const filePath = path.resolve('./');
    console.log('当前目录的相对路径:', filePath);
    // 传入一个文件夹名字,检测是否存在
    const isExist = (name) => {
      return new Promise((resolve, reject) => {
        open(`${filePath}/${name}`, 'r', (err, fd) => {
          if (err) reject(err)
          resolve(fd);
        });
      });
    }
    // 文件夹名:match-web, match-service 使用数组
    // 镜像
    const images = ['match-web', 'match-service','match-main-service']
    // 依次检测文件夹是否存在
    const checkDir = async () => {
      for (let i = 0; i < images.length; i++) {
        try {
          await isExist(images[i]);
          console.log(`${images[i]}文件夹存在,继续执行`);
        } catch (error) {
          console.log(error);
          console.log(`${images[i]}文件夹不存在`);
          throw new Error(`${images[i]}文件夹不存在`);
        }
      }
    }
    await checkDir();
    // 集群 集
    const stacks = ['match-app']
    // 依次检测集群是否存在 并删除
    const checkStack = async (stack) => {
      try {
        const result = await find(stack, 'docker stack ls');
        log('docker stack ls', result);
        if (result) {
          console.log(`${stack}集群存在,开始执行删除集群\n`);
          const { stdout } = await runDelete(stack, `docker stack rm ${stack}`);
          log(`docker stack rm ${stack}`, stdout);
          log(`删除${stack}集群成功`, stdout)
        }else{
          log('集群不存在,不需要删除,继续执行', result);
        }
      } catch (error) {
        console.log(error);
        throw error
      }
    }


    for (let i = 0; i < stacks.length; i++) {
      await checkStack(stacks[i]);
    }
    //检测 service 是否存在 并删除

    const services = ['match-app_match-web', 'match-app_match-service','match-app_match-main-service']
    const checkService = async (service) => {
      try {
        const result = await find(service, 'docker service ls');
        log('docker service ls', result);
        if (result) {
          console.log(`${service}service存在,开始执行删除service\n`);
          const { stdout } = await runDelete(service, `docker service rm ${service}`);
          log(`docker service rm ${service}`, stdout);
          log(`删除${service}service成功`, stdout)
        }else{
          log('service不存在,不需要删除,继续执行', result);
        }
      } catch (error) {
        console.log(error);
        throw error
      }
    }
    for (let i = 0; i < services.length; i++) {
      await checkService(services[i]);
    }

    //检测 container 是否存在 并删除
    const containers = ['match-web', 'match-service','match-main-service']
    const checkContainer = async (container ,num = 10) => {
      try {
        const result = await find(container, 'docker container ls');
        log('docker container ls', result);
        if (result) {
          console.log(`${container} 存在,开始执行删除container\n`);
          //先停止
          const { stdout: stdout1 } = await exec(`docker container stop ${container}`);
          log(`docker container stop ${container}`, stdout1);
          //再删除
          const { stdout } = await runDelete(container, `docker container rm ${container}`);
          log(`docker container rm ${container}`, stdout);
          log(`删除${container}container成功`, stdout)
        }else{
          log('container不存在,不需要删除,继续执行', result);
        }
      } catch (error) {
        if(num > 0){
          console.log(`${container} 删除执行失败,继续测试,剩余尝试次数${num - 1}`);
          await sleep(2000);
          await checkContainer(container, num - 1)
        }else{
          console.log(error);
          throw error
        }
      }
    }
    for (let i = 0; i < containers.length; i++) {
      await checkContainer(containers[i]);
    }
    // 依次检测镜像是否存在 并删除
    const checkImage = async (image, num = 10) => {
      try {
        const result = await find(image, 'docker images');
        log('docker images', result);
        if (result) {
          console.log(`${image}镜像存在,开始执行删除镜像\n`);
          const { stdout } = await runDelete(image, `docker rmi ${image}`);
          log(`docker rmi ${image}`, stdout);
          log(`删除${image}镜像成功`, stdout)
        }else{
          log('镜像不存在,不需要删除,继续执行', result);
        }
      } catch (error) {
        if (num > 0) {
        console.log(`镜像${image}删除失败,继续执行,剩余尝试次数:`, num);
        await sleep(2000);
        await checkImage(image, num - 1)
        } else {
          throw error
        }
      }
    }
    for (let i = 0; i < images.length; i++) {
      await checkImage(images[i]);
    }

    //结束
    console.log(colors.blue + '结束' + colors.reset);
  } catch (error) {
    console.log(error);
    //退出进程
    process.exit(1);
  }
})();