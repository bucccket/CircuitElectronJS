export class Grid {
    name: string;
    width: number;
    height: number;

    constructor(name: string, width: number, height:number) {
        this.name = name;
        this.width = width;
        this.height = height;
    }

    generateGrid(gridType:string) {
        var fineWidth = this.width;
        var coarseWidth = fineWidth * 10;
        var fineHeigth = this.height;
        var coarseHeigth = fineHeigth * 10;

        var data = `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"> \
                        <defs> \
                            <pattern id="smallGrid" width="${fineWidth}" height="${fineHeigth}" patternUnits="userSpaceOnUse"> \
                                <path class="smallGrid" d="M 0,0 H ${fineWidth} V ${fineHeigth} H 0 Z" fill="white" stroke="gray" stroke-width="0.5" /> \
                            </pattern> \
                            <pattern id="grid" width="${coarseWidth}" height="${coarseHeigth}" patternUnits="userSpaceOnUse"> \
                                <rect width="${coarseWidth}" height="${coarseHeigth}" fill="url(#smallGrid)" /> \
                                <path d="M 0,0 H ${coarseWidth} V ${coarseHeigth} H 0 Z" fill="none" stroke="gray" stroke-width="1" /> \
                            </pattern> \
                        </defs> \
                        <rect width="100%" height="100%" fill="url(#${gridType})" /> \
                    </svg>`;
        return data;
    }
}