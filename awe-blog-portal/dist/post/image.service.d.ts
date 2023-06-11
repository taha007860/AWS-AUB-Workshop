import { ImageDTO } from "./dto/ImageDTO";
export declare class ImageService {
    insert(image: ImageDTO): Promise<ImageDTO>;
    get(image: ImageDTO): Promise<ImageDTO>;
}
