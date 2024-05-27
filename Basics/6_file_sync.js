const {readFileSync,writeFileSync}=require('fs')

const first=readFileSync('./content/first.txt','utf-8') // reading the first file
const second=readFileSync('./content/second.txt','utf-8') // reading the second file

writeFileSync( //writing data in file result sync, by default the data will be overwritten if any exist
    './content/result_sync.txt',
    `Hello, the first file content is ${first} and 
    the second file content is ${second}`,
    {flag:'a'} // to append data instead of overwritting
    )