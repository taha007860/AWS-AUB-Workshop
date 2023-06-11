import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { ImageModule } from './post/image.module';
@Module({
  imports: [PostModule, ImageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
