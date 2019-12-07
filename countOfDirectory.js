const fs = require('fs')

function CountOfDirectory(files, processPath) {
    let counterDir = 0
    files.forEach(element => {
        if (fs.lstatSync(`${processPath}\\${element}`).isDirectory()) {
            counterDir = counterDir + 1
        }
    });
    return counterDir
}


exports.CountOfDirectory = CountOfDirectory