// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
// import ipcRenderer from 'electron'
// const { ipcRenderer } = require('electron')

// errorBtn.addEventListener('click', (event) => {
//     ipcRenderer.send("open-file-dialog")
// })


const btnChoosePath = document.querySelector('#btnChoosePath')

function getfolder(e) {
    var files = e.target.files;
    var path = files[0].webkitRelativePath;
    var Folder = path.split("/");
    alert(Folder[0]);
  }

btnChoosePath.addEventListener('click', (event) => {
    confirm('asdads')
    // ipcRenderer.send("open-file-dialog")
})

// ipcRenderer.on('selected-directory', function (event, pathFromEl) {
//     confirm(pathFromEl)
// })