const util = require('util');
const exec = util.promisify(require('child_process').exec);

const secretvalues = {
  'nest-match-object': `U2FsdGVkX192cz1+4G1rHKDBZFhnBKFEa5h1y/uGb2aIHXv+ruzqBoMVJd8x5hJ/mQsVGUjLxygkcZwLXQwz7WdPOHuw3sFzH99h0miEEGOEBPsxp7q7qfl3Bp/DSf/LG3XS8ODOXhMguJz2hlBUVz8sHoQtOuJrR+HSfIDdcXdeJxRLdsyAPz6ya/dRnslSNYorbivLUs+sVjyV5kFIXcCg5zhso9ZvUkeXiulLl75zoOzwn+PtBEOoo1ZdcmGNofePj17MI2q3szy4J9RLSnuYH7vkqodcfjDtwcyHtsjOcy6paZEpM+YPGNyehJSGAmnO2kTM8Kf+6jtMVVsRHuRrvl2BbDir55OTzGV75e7GUymmyOnIVF9jFIhJCqnUPBmaFJX8abQydQTrVk+XOI/mInHe6GvbiqOOFtEyfcIurNXqyQUh97xFhfmOAHVt`
}



const colors = {
  reset: "\x1b[0m",
  // 带颜色的示例
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
};
//传入一个命令和一个结果,输出命令和结果,使用黄色输出命令,绿色输出结果
const log = (command, result) => {
  // console.log('\x1b[33m%s\x1b[0m', '执行命令: ', command, '\n');
  // console.log('\x1b[32m%s\x1b[0m', '返回结果: \n', result, '\n');
  console.log(colors.yellow + '执行命令: ' + command + colors.reset);
  console.log(colors.green + '返回结果: ' + result + colors.reset);
}
//等待
const sleep = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}
const find = async (name, command) => {
  try {
    const { stdout } = await exec(command);
    if (typeof stdout !== 'string') return false;
    if (stdout.includes('No such')) return false;
    if (stdout.includes(name)) return stdout;
    return false;
  } catch (error) {
    if (typeof error === 'object') {
      const strerr = JSON.stringify(error, null, 2)
      if (strerr.includes('No such')) return false;
      if(strerr.includes('not found')) return false;
      console.log(strerr);
    } else {
      console.log('error 类型:', typeof error, '\n', 'error 值:', error);
    }

    throw error
  }
}
const runDelete = async (name, command) => {
  try {
    const { stdout } = await exec(command);
    if (typeof stdout !== 'string') return false;
    if (stdout.includes('No such')) return stdout;
    if (stdout.includes(name)) return stdout;
    return false;
  } catch (error) {
    if (typeof error === 'object') {
      const strerr = JSON.stringify(error, null, 2)
      if(strerr.includes('not found')) return false;
      if (strerr.includes('No such')) return false;
      console.log(strerr);
    } else {
      console.log('error 类型:', typeof error, '\n', 'error 值:', error);
    }

    throw error
  }
}
(async () => {
  try {
    const secrets = [
      'nest-match-object'
    ]
    const checkSecrets = async (secret) => {
      try {
        const result = await find(secret, `docker secret ls`)
        if (result) {
          log(`docker secret ls`, result)
        }
        const result2 = await runDelete(secret, `docker secret rm ${secret}`)
        log(`docker secret rm ${secret}`, result2)
        // 创建 secret
        const result3 = await runDelete(secret, `echo "${secretvalues[secret]}" | docker secret create nest-match-object -`)
        console.log(colors.green, `${secret} - 创建成功`, colors.reset, '\n', 'result:', result3 ,colors.reset)
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