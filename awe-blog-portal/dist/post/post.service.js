"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const dynamodb_data_mapper_1 = require("@aws/dynamodb-data-mapper");
const PostEntity_1 = require("./entity/PostEntity");
const aws_sdk_1 = require("aws-sdk");
let PostService = exports.PostService = class PostService {
    async insert(post) {
        try {
            const database = new dynamodb_data_mapper_1.DataMapper({
                client: new aws_sdk_1.DynamoDB({ endpoint: 'http://localhost:8000',
                    region: 'local' }),
            });
            return await database.put(Object.assign(new PostEntity_1.PostEntity(), {
                id: post.id,
                text: post.text,
                title: post.title,
                author: post.author
            }));
        }
        catch (error) {
            console.log({ error: error.name }, 'Error inserting item');
            throw new Error(error);
        }
    }
    async get(post) {
        const database = new dynamodb_data_mapper_1.DataMapper({
            client: new aws_sdk_1.DynamoDB({ endpoint: 'http://localhost:8000',
                region: 'local' }),
        });
        const postEntity = new PostEntity_1.PostEntity();
        postEntity.id = post.id;
        return await database.get(postEntity);
    }
};
exports.PostService = PostService = __decorate([
    (0, common_1.Injectable)()
], PostService);
//# sourceMappingURL=post.service.js.map