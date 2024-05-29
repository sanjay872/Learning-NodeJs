const {readFile,writeFile} = require('fs').promises
// const util=require('util')

// const readFilePromise=util.promisify(readFile)
// const writeFilePromise=util.promisify(writeFile)

const start=async()=>{
    try{
        const data=await readFile('../content/first.txt')
        await writeFile('../content/result-mind-grenade.txt',`This is awesome: ${data}`)
        console.log(data.toString())
    }catch(err){
        console.log(err)
    }
}

start()


// const getData=(path)=>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,(err,data)=>{
//             if(err){
//                 reject(err)
//             }
//             resolve(data)
//         })
//     })
// }

// getData('../content/first.txt')
//     .then(data=>console.log(data.toString()))
//     .catch(err=>console.log(err))