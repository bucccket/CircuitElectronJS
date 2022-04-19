export class Grid {
    name: string;
    size: number;

    constructor(name: string, width: number) {
        this.name = name;
        this.size = width;
    }

    generateGrid(gridType:string) {
        var fineSize = this.size;
        var coarseSize = this.size * 10;

        var data = `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"> \
                        <defs> \
                            <pattern id="smallGrid" width="${fineSize}" height="${fineSize}" patternUnits="userSpaceOnUse"> \
                                <path d="M 0,0 H ${fineSize} V ${fineSize} H 0 Z" fill="white" stroke="gray" stroke-width="0.5" /> \
                            </pattern> \
                            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse"> \
                                <rect width="${coarseSize}" height="${coarseSize}" fill="url(#smallGrid)" /> \
                                <path d="M 0,0 H ${coarseSize} V ${coarseSize} H 0 Z" fill="none" stroke="gray" stroke-width="1" /> \
                            </pattern> \
                        </defs> \
                        <rect width="100%" height="100%" fill="url(#${gridType})" /> \
                    </svg>`;
        return data;
    }
}