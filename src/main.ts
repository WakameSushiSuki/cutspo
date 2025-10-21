import config from "./config.json";
import Util from "./util";

class Tissue {
    // designed to be extended!! this is very barebones right now

    cctx: CanvasRenderingContext2D;
    texture?: string;

    constructor(
        public layerName: string,
        public canvas: HTMLCanvasElement,
    ) {
        this.cctx = canvas.getContext('2d')!;
    }

    static fromObject(name: string, obj: Object): Tissue {
        const can: HTMLCanvasElement = document.createElement('canvas');
        return new Tissue(
            name,
            can,
        );
    }
}

const tissues_container: HTMLElement | null = document.getElementById("tissues-container");
if (!tissues_container || tissues_container !instanceof HTMLDivElement)
    throw new Error(
        `#tissues-container must be 'HTMLDivElement'; got '${Util.typeName(tissues_container)}'`);

const tissues: Tissue[] = [];

Object.entries(config.tissues).forEach(([key, value]: [string, any]): any => {
    const tis: Tissue = Tissue.fromObject(key, value);
    tis.canvas.className = '.tissue';
    tis.canvas.width = config.width;
    tis.canvas.height = config.height;

    if (!tis.texture)
        throw new Error('!tis.texture');

    const img = new Image();
    img.crossOrigin = `anonymous`;
    img.src = tis.texture;
    img.onload = () =>
        tis.cctx.drawImage(img, 0, 0, tis.canvas.width, tis.canvas.height);

    tissues_container.appendChild(tis.canvas);

    tissues.push(tis);
});

