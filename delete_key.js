const util = require('util');
const exec = util.promisify(require('child_process').exec);
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
  console.log(colors.yellow + '执行命令: ' + command + colors.reset);
  console.log(colors.green + '返回结果: ' + result + colors.reset);
}
const find = async (name, command) => {
  try {
    const { stdout } = await exec(command);
    if(typeof stdout !=='string') return false;
    if (stdout.includes('No such')) return false;
    if (stdout.includes(name)) return stdout;
    return false;
  } catch (error) {
    if(typeof error ==='object'){
      const strerr= JSON.stringify(error,null,2)
      if (strerr.includes('No such')) return false;
      console.log( strerr);
    }else{
      console.log('error 类型:', typeof error, '\n', 'error 值:', error);
    }

    throw error
  }
}
const runDelete = async (name, command) => {
  try {
    const { stdout } = await exec(command);
    if(typeof stdout !=='string') return false;
    if (stdout.includes('No such')) return stdout;
    if (stdout.includes(name)) return stdout;
    return false;
  } catch (error) {
    if(typeof error ==='object'){
      const strerr= JSON.stringify(error,null,2)
      if (strerr.includes('No such')) return false;
      console.log( strerr);
    }else{
      console.log('error 类型:', typeof error, '\n', 'error 值:', error);
    }

    throw error
  }
}
(async () => {
  try {
    console.log(colors.green, '开始执行', colors.reset)


    const secrets = [
      'nest-match-object'
    ]
    const checkSecrets = async (secrets) => {
      try {
        const result = await find(secrets, `docker secret ls`)
        if(result){
          console.log(colors.green, '已存在', colors.reset)
          const result = await runDelete(secrets, `docker secret rm ${secrets}`)
          log(`docker secret rm ${secrets}`, result)
        }
      } catch (error) {
        console.log('error', error)
        throw error
      }
    }
    for (const secret of secrets) {
      await checkSecrets(secret)
    }

    console.log(colors.green, '执行完毕', colors.reset)
  } catch (error) {
     process.exit(1)
  }
})()