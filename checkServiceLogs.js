const util = require('util');
const exec = util.promisify(require('child_process').exec);
//查看日志
const { stdout, stderr } = await exec('docker service logs --tail 3000 --details --timestamps --since 1m --follow --no-trunc --raw - 1');