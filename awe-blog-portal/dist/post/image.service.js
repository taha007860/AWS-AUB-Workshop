"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageService = void 0;
const common_1 = require("@nestjs/common");
const dynamodb_data_mapper_1 = require("@aws/dynamodb-data-mapper");
const ImageEntity_1 = require("./entity/ImageEntity");
const aws_sdk_1 = require("aws-sdk");
let ImageService = exports.ImageService = class ImageService {
    async insert(image) {
        try {
            const database = new dynamodb_data_mapper_1.DataMapper({
                client: new aws_sdk_1.DynamoDB({ endpoint: 'http://localhost:8000',
                    region: 'local' }),
            });
            return await database.put(Object.assign(new ImageEntity_1.ImageEntity(), {
                id: image.id,
                url: image.url
            }));
        }
        catch (error) {
            console.log({ error: error.name }, 'Error inserting item');
            throw new Error(error);
        }
    }
    async get(image) {
        const database = new dynamodb_data_mapper_1.DataMapper({
            client: new aws_sdk_1.DynamoDB({ endpoint: 'http://localhost:8000',
                region: 'local' }),
        });
        const imageEntity = new ImageEntity_1.ImageEntity();
        imageEntity.id = image.id;
        return await database.get(imageEntity);
    }
};
exports.ImageService = ImageService = __decorate([
    (0, common_1.Injectable)()
], ImageService);
//# sourceMappingURL=image.service.js.map