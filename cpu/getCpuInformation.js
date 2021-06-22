const os = require('os');

const getCpuInform = os.cpus();

module.exports.cpuInform = console.log(getCpuInform);
