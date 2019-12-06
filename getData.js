const fs = require('fs')
const moveFileToRoot = require('./moveFileToRoot.js')

// let shipFolders = []

const GetData = function (processPath) {

    document.getElementById('errors').innerHTML = ''
    const files = fs.readdirSync(processPath)
    let progressValue = 0
    let everage = files.length / 100
    files.forEach((file, index) => {
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
                    setTimeout(function () {

                        progressValue = progressValue + everage
                        console.log(progressValue)
                        progress.setAttribute('style', `width:${progressValue}%`)

                    }, 3000);

                } else {
                    let newProgress = document.createElement('div')
                    newProgress.setAttribute('id', 'progress')
                    barr.appendChild(newProgress)
                }

            }
        } catch {
            console.log('ze by to padlo na *.SYS')
        }


    });

    // files.map(file => {

    //     try {
    //         if (fs.lstatSync(`${processPath}\\${file}`).isDirectory()) {
    //             let reason = moveFileToRoot.MoveFileToRoot(processPath, file)
    //             if (reason) {
    //                 var x = document.createElement("div");
    //                 x.setAttribute('class', 'error')
    //                 var t = document.createTextNode(reason);
    //                 x.appendChild(t);
    //                 document.getElementById('errors').appendChild(x);
    //             }
    //         }
    //     } catch {
    //         console.log('ze by to padlo na *.SYS')
    //     }
    // })
}






exports.GetData = GetData