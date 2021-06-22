const os = require ('os');

const cpuSpeed = os.cpus().map(item => item.speed);

module.exports.getCpuSpeed = console.log(cpuSpeed);