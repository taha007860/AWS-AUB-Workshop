import { ImageDTO } from './dto/ImageDTO';
import { ImageQueryResponseDTO } from './dto/ImageQueryResponseDTO';
export declare class ImageController {
    static imageMap: Map<string, ImageDTO>;
    static id: number;
    createImage(image: ImageDTO): Promise<ImageDTO>;
    getImage(imageId: string): Promise<ImageDTO>;
    getImages(): Promise<ImageQueryResponseDTO>;
}
