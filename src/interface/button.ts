import { ipcRenderer } from "electron";

export class Button {
    name: string;
    imageSrc: string;

    constructor(name: string, imageSrc: string) {
        this.name = name;
        this.imageSrc = imageSrc;
    }

    setHandler(listener: (this: HTMLElement, ev: MouseEvent) => any, options?: boolean | AddEventListenerOptions | undefined) {
        let buttonInst = document.getElementById(this.name);
        if (!buttonInst) {
            return;
        }
        buttonInst.addEventListener('click',listener);
    }
}
