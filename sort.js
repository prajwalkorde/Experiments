import fs from "fs/promises"
import fsn from 'fs'
import path from 'path'

let basepath = "d:\\Programming\\web_dev\\js\\Node\\excersice"
let current = await fs.readdir(basepath)

for (const item of current) {
    console.log("running for ");
    let ext = item.split('.')[item.split('.').length - 1]
    let extPath = path.join(basepath, ext)
    if (fsn.existsSync(extPath) && ext != "js" && ext != "json") {
        fs.rename(path.join(basepath, item), path.join(extPath, item))
    }
    else if (ext != "js" && ext != "json"){
        await fs.mkdir(ext)
        await fs.rename(path.join(basepath, item), path.join(extPath, item))
    }
    console.log(item);
}