import { Module } from '@nestjs/common';
import { ImageController } from './image.contoller';
import { ImageService } from './image.service';

@Module({
  controllers: [ImageController],
  providers: [ImageService]
})
export class ImageModule {}