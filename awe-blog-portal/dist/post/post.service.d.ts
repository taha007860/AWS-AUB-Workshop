import { PostDTO } from "./dto/PostDTO";
export declare class PostService {
    insert(post: PostDTO): Promise<PostDTO>;
    get(post: PostDTO): Promise<PostDTO>;
}
