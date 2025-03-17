const os = require("os");

const user = os.userInfo();
// console.log(user);

// method returns the system uptime in seconds
const uptime = os.uptime();
// console.log(`The System Uptime is ${uptime} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
// console.log(currentOS);
