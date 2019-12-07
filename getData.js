const fs = require('fs')
const moveFileToRoot = require('./moveFileToRoot.js')
const countOfDirectory = require('./countOfDirectory.js')

// let shipFolders = []

const GetData = function (processPath) {
    try {
        document.getElementById('progress').remove()
    } catch{

    }
    document.getElementById('errors').innerHTML = ''
    const files = fs.readdirSync(processPath)
    let progressValue = 0
    let everageUnit = 100 / countOfDirectory.CountOfDirectory(files, processPath)
    files.forEach((file, index) => {
        setTimeout(function () {
            const barr = document.getElementById('barr')
            let progress = document.getElementById('progress')


            try {
                if (fs.lstatSync(`${processPath}\\${file}`).isDirectory()) {
                    let reason = moveFileToRoot.MoveFileToRoot(processPath, file)
                    if (reason) {
                        var x = document.createElement("div");
                        x.setAttribute('class', 'error')
                        var t = document.createTextNode(reason);
                        x.appendChild(t);
                        document.getElementById('errors').appendChild(x);
                    }


                    if (!!progress) {
                        progressValue = progressValue + everageUnit
                        console.log(progressValue)
                        progress.setAttribute('style', `width:${progressValue}%`)
                        progress.innerText = `${Math.round(progressValue)}%`
                    } else {
                        let newProgress = document.createElement('div')
                        newProgress.setAttribute('id', 'progress')
                        barr.appendChild(newProgress)
                        progressValue = everageUnit
                    }



                }
            } catch {
                console.log('ze by to padlo na *.SYS')
            }
        }, index * 10);

    });

}

exports.GetData = GetData