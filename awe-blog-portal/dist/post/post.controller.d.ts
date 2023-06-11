import { PostDTO } from './dto/PostDTO';
import { PostQueryResponseDTO } from "./dto/PostQueryResponseDTO";
export declare class PostController {
    static postMap: Map<string, PostDTO>;
    static id: number;
    createPost(post: PostDTO): Promise<PostDTO>;
    getPost(postId: string): Promise<PostDTO>;
    getPosts(): Promise<PostQueryResponseDTO>;
}
