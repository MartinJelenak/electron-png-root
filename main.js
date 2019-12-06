"use strict";
const electron = require("electron");

const { app, BrowserWindow, ipcMain, dialog } = require('electron')

const path = require('path');
const url = require('url');


let win;

function createWindow() {

    win = new BrowserWindow({
        // frame: false,
        width: 227,
        height: 600,
        webPreferences: {
            nodeIntegration: true
            
        },
        resizable: false
    })

    win.setMenuBarVisibility(false)

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));
    // win.webContents.openDevTools()
    win.on('closed', () => {
        win = null
    });
}



ipcMain.on('open-file-dialog', (event) => {
    dialog.showOpenDialog({
        properties: ['openFile', 'openDirectory']
    }, (files) => {
        if (files) {
            event.sender.send('selected-directory', files)
        }
    });
})

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }

});