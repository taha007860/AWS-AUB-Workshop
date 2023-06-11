import {Controller, Post, Get, Body, Param} from '@nestjs/common';
import { PostDTO } from  './dto/PostDTO';
import {PostQueryResponseDTO} from "./dto/PostQueryResponseDTO";
import {PostService} from "./post.service";

@Controller('post')
export class PostController {
    static postMap = new Map<string, PostDTO>();
    static id = 1;

    @Post()
    async createPost(@Body() post: PostDTO){
        console.log('post post request');
        const identifier = "post"+ PostController.id;
        post.id = identifier;
        PostController.postMap.set(identifier, post);
        const service = new PostService();
        service.insert(post);
        console.log("database call pass");
        PostController.id++;
        return  post;
    }

    @Get(':id')
    async getPost(@Param('id') postId: string) : Promise<PostDTO> {
        console.log('hello post get request');
        const service = new PostService();
        const post = new PostDTO();
        post.id = postId;
        return service.get(post);
    }
@Get()
    async getPosts() : Promise<PostQueryResponseDTO> {
        console.log('hello post get posts');
        //return PostController.postMap.get(postId);
        const posts = new PostQueryResponseDTO();
        console.log(posts);
        posts.posts = [... PostController.postMap.values()];
        console.log(posts);
        return posts;
    }
}