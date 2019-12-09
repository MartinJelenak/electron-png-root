const fs = require('fs')
var sizeOf = require('image-size')


const MoveFileToRoot = function (processPath, folder) {
    let foundedStat = ''
    const files = fs.readdirSync(`${processPath}\\${folder}`)

    for (let i = 0; i < files.length; i++) {

        if (`${folder}_SHOP.png` == files[i] && sizeOf(`${processPath}\\${folder}\\${folder}_SHOP.png`).height == 260) {
            fs.copyFileSync(`${processPath}\\${folder}\\${files[i]}`, `${processPath}\\${files[i]}`);
            foundedStat = ''
            break
        } else {
            if (sizeOf(`${processPath}\\${folder}\\${folder}_SHOP.png`).height == 260) {
                foundedStat = folder
            } else {
                foundedStat = `${folder} //ERROR !260px`
            }
        }
    }
    return foundedStat

}

exports.MoveFileToRoot = MoveFileToRoot