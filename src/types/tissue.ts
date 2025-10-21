import TextureBuffer from "./texture_buffer";

export interface TissueAsObject {
    solid?: boolean,
    texture: string,
}

export class Tissue {
    solid: boolean = false;

    constructor(
        public texture: TextureBuffer,
    ) {}

    static async fromObject(obj: TissueAsObject): Promise<Tissue> {
        let tis = new Tissue(
            await TextureBuffer.fromTextureURL(obj.texture)
        )

        tis.solid = obj.solid ?? false;

        return tis;
    }
}

export default Tissue;