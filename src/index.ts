import { app, BrowserWindow, globalShortcut, ipcMain, IpcMainEvent } from 'electron';
import * as path from 'path';

const createWindow = () => {
    console.log("createWindow");
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        },
    })

    globalShortcut.register('CommandOrControl+F', () => {
        //shortcut
    })

    win.loadFile('html/index.html');
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
})

app.on('window-all-closed', () => {
    console.log("exited.");
    if (process.platform !== 'darwin') app.quit()
})

function invokeGridRender(event: IpcMainEvent) {
    console.log("invoked Ipc grid render response");
    event.reply("render-response");
}

function invokeButtonListeners(event: IpcMainEvent) {
    console.log("invoked Ipc button render response");
    event.reply("UI-buttons-response");
}

ipcMain.on("invoke-renderer", (event: IpcMainEvent, request: string) => {
    if (request == "request-grid") {
        invokeGridRender(event);
    }
    else if (request == "request-UI-buttons") {
        invokeButtonListeners(event);
    }
    else {
        console.log(`invalid request :${request}`);
    }
});

ipcMain.on("btnTestClick",function (event, arg) {
    console.log(arg);

    event.sender.send("btnTestClick-task-finished", "yes"); 
});