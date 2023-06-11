import { Injectable } from '@nestjs/common';
import {PostDTO} from "./dto/PostDTO";
import {DataMapper} from "@aws/dynamodb-data-mapper";
import {PostEntity} from "./entity/PostEntity";
import {DynamoDB} from "aws-sdk";

@Injectable()
export class PostService {
    async insert(post: PostDTO): Promise<PostDTO> {
        try {
            const  database = new DataMapper({

                client: new DynamoDB({ endpoint: 'http://localhost:8000',
                    region: 'local' }),
            });
            return await database.put(Object.assign(new PostEntity(),
                {
                    id: post.id,
                    text: post.text,
                    title: post.title,
                    author: post.author
                }));
        } catch (error) {
            console.log({ error: error.name }, 'Error inserting item');
            throw new Error(error);
        }
    }

    async get(post: PostDTO): Promise<PostDTO> {
        const  database = new DataMapper({

            client: new DynamoDB({ endpoint: 'http://localhost:8000',
                region: 'local' }),
        });

        const postEntity = new PostEntity();
        postEntity.id = post.id;
        return await database.get(postEntity);
    }
}
