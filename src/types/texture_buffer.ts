export class TextureBuffer {
    constructor(
        public width: number
            = 0,
        public height: number
            = 0,
        public rows: {
            colors: Uint8ClampedArray[],
            alphas: Uint8ClampedArray,
        }[] = [],
    ) {}

    static async fromTextureURL(url: string): Promise<TextureBuffer> {
        return new Promise<TextureBuffer>((resolve, reject) => {
            const img = new Image();
            img.crossOrigin = 'anonymous';

            img.onload = () => {
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;

                const ctx = canvas.getContext('2d');
                if (!ctx) {
                    return reject(new Error('Failed to get 2D context'));
                }

                ctx.drawImage(img, 0, 0);
                const imageData = ctx.getImageData(0, 0, img.width, img.height);
                const { data, width, height } = imageData;

                const rows: { colors: Uint8ClampedArray[], alphas: Uint8ClampedArray }[] = [];

                for (let y = 0; y < height; y++) {
                    const colors: Uint8ClampedArray[] = [];
                    const alphas = new Uint8ClampedArray(width);

                    for (let x = 0; x < width; x++) {
                        const i = (y * width + x) * 4;
                        const r = data[i];
                        const g = data[i + 1];
                        const b = data[i + 2];
                        const a = data[i + 3];

                        colors.push(new Uint8ClampedArray([r, g, b]));
                        alphas[x] = a;
                    }

                    rows.push({ colors, alphas });
                }

                resolve(new TextureBuffer(width, height, rows));
            };

            img.onerror = (err) => reject(err);
            img.src = url;
        });
    }
}

export default TextureBuffer;