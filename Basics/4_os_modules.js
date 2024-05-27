const os =require('os')

// info on current user
const user=os.userInfo()
console.log(user)

// system uptime in hour
console.log(`The System uptime is ${os.uptime()/3600}`)

//os info
const currentOS={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS)