const fs = require('fs')
const moveFileToRoot = require('./moveFileToRoot.js')

// let shipFolders = []

const GetData = function (processPath) {
    document.getElementById('errors').innerHTML = ''
    const files = fs.readdirSync(processPath)

    files.map(file => {

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
            }
        } catch {
            console.log('ze by to padlo na *.SYS')
        }
    })
}






exports.GetData = GetData