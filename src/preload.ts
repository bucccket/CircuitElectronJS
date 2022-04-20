import { ipcRenderer, IpcRendererEvent } from "electron";
import { Button } from "./interface/button";
import { Grid } from "./interface/grid";

ipcRenderer.on("render-response", (event: IpcRendererEvent) => {

    console.log("on render-grid-response");

    const gridDiv = document.getElementById("grid-renderer");
    if (!gridDiv) {
        return;
    }

    const grid:Grid = new Grid("main-grid",10,10);
    gridDiv.innerHTML = ""; //clearing HTML before render
    gridDiv.innerHTML += grid.generateGrid("grid");
});

ipcRenderer.on("UI-buttons-response", (event: IpcRendererEvent) => {
    let button1:Button = new Button("btnTest","./svg/buttons/test.svg");
    button1.setHandler(function () {
        var arg = "argument: button 1";
        ipcRenderer.send("btnTestClick", arg);
    });
    let button2:Button = new Button("btnTest2","./svg/buttons/test.svg");
    button2.setHandler(function () {
        var arg = "argument: button 2";
        ipcRenderer.send("btnTestClick", arg);
    });
});

ipcRenderer.send("invoke-renderer", "request-grid");
ipcRenderer.send("invoke-renderer", "request-UI-buttons");