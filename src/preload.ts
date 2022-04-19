import { ipcRenderer, IpcRendererEvent } from "electron";
import { Grid } from "./interface/grid";

ipcRenderer.on("render-grid-response", (event: IpcRendererEvent) => {

    console.log("on render-grid-response");

    const renderer = document.getElementById("grid-renderer");
    if (!renderer) {
        return;
    }

    const grid:Grid = new Grid("main-grid",10,10);
    renderer.innerHTML = ""; //clearing HTML before render
    renderer.innerHTML += grid.generateGrid("grid");
});

ipcRenderer.send("grid-renderer", "request-grid");