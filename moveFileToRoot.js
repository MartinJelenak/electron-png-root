const fs = require('fs')

const MoveFileToRoot = function (processPath, folder) {
    let foundedStat = ''
    const files = fs.readdirSync(`${processPath}\\${folder}`)

    for(let i = 0; i<files.length; i++){

        if (`${folder}_SHOP.png` == files[i]) {
            fs.copyFileSync(`${processPath}\\${folder}\\${files[i]}`, `${processPath}\\${files[i]}`);
            foundedStat = ''
            break
        }else{
            foundedStat = folder
        }
    }
    return foundedStat

}

exports.MoveFileToRoot = MoveFileToRoot