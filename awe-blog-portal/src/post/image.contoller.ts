import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { ImageDTO } from './dto/ImageDTO';
import { ImageQueryResponseDTO } from './dto/ImageQueryResponseDTO';
import { ImageService } from './image.service';
@Controller('image')
export class ImageController {
  static imageMap = new Map<string, ImageDTO>();
  static id = 1;
  @Post()
  async createImage(@Body() image: ImageDTO) {
    console.log('POST /images');
    const identifier = "image"+ ImageController.id;
    image.id = identifier;
    ImageController.imageMap.set(identifier, image);
    const service = new ImageService();
        service.insert(image);
        console.log("database call pass");
        ImageController.id++;
        return image;
  }

  @Get(':id')
  async getImage(@Param('id') imageId: string) : Promise<ImageDTO> {
      console.log('hello post get request');
      const service = new ImageService();
      const image = new ImageDTO();
      image.id = imageId;
      return service.get(image);
  }

  @Get()
    async getImages() : Promise<ImageQueryResponseDTO> {
        console.log('hello post get posts');
        //return PostController.postMap.get(postId);
        const images = new ImageQueryResponseDTO();
        console.log(images);
        images.images = [... ImageController.imageMap.values()];
        console.log(images);
        return images;
    }
}