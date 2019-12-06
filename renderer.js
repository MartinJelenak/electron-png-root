const getData = require('./getData.js')
const { ipcRenderer } = require('electron')

const errorBtn = document.getElementById('errorBtn')
const startBtn = document.getElementById('startBtn')

errorBtn.addEventListener('click', (event) => {
    ipcRenderer.send("open-file-dialog")
})

ipcRenderer.on('selected-directory', (event, pathFromEl) => {
    // console.log(typeof pathFromEl, pathFromEl[0])
    document.getElementById('choosenFile').value = pathFromEl[0]
})

startBtn.addEventListener('click', function(){
    getData.GetData(document.getElementById('choosenFile').value)
})