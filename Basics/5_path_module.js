const path =require('path')

console.log(path.sep) //path seperator

const filePath = path.join('/content/','subfolder','file.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolutePath = path.resolve(__dirname,'content','subfolder','file.txt')
console.log(absolutePath)