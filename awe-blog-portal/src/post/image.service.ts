import { Injectable } from '@nestjs/common';
import {ImageDTO} from "./dto/ImageDTO";
import {DataMapper} from "@aws/dynamodb-data-mapper";
import {ImageEntity} from "./entity/ImageEntity";
import {DynamoDB} from "aws-sdk";
@Injectable()
export class ImageService {
    async insert(image: ImageDTO): Promise<ImageDTO> {
        try {
            const  database = new DataMapper({

                client: new DynamoDB({ endpoint: 'http://localhost:8000',
                    region: 'local' }),
            });
            return await database.put(Object.assign(new ImageEntity(),
                {
                    id: image.id,
                    url: image.url
                }));
        } catch (error) {
            console.log({ error: error.name }, 'Error inserting item');
            throw new Error(error);
        }
    }

    async get(image: ImageDTO): Promise<ImageDTO> {
        const  database = new DataMapper({

            client: new DynamoDB({ endpoint: 'http://localhost:8000',
                region: 'local' }),
        });

        const imageEntity = new ImageEntity();
        imageEntity.id = image.id;
        return await database.get(imageEntity);
    }
}