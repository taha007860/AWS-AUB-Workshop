"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var ImageController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageController = void 0;
const common_1 = require("@nestjs/common");
const ImageDTO_1 = require("./dto/ImageDTO");
const ImageQueryResponseDTO_1 = require("./dto/ImageQueryResponseDTO");
const image_service_1 = require("./image.service");
let ImageController = exports.ImageController = ImageController_1 = class ImageController {
    async createImage(image) {
        console.log('POST /images');
        const identifier = "image" + ImageController_1.id;
        image.id = identifier;
        ImageController_1.imageMap.set(identifier, image);
        const service = new image_service_1.ImageService();
        service.insert(image);
        console.log("database call pass");
        ImageController_1.id++;
        return image;
    }
    async getImage(imageId) {
        console.log('hello post get request');
        const service = new image_service_1.ImageService();
        const image = new ImageDTO_1.ImageDTO();
        image.id = imageId;
        return service.get(image);
    }
    async getImages() {
        console.log('hello post get posts');
        const images = new ImageQueryResponseDTO_1.ImageQueryResponseDTO();
        console.log(images);
        images.images = [...ImageController_1.imageMap.values()];
        console.log(images);
        return images;
    }
};
ImageController.imageMap = new Map();
ImageController.id = 1;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ImageDTO_1.ImageDTO]),
    __metadata("design:returntype", Promise)
], ImageController.prototype, "createImage", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ImageController.prototype, "getImage", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ImageController.prototype, "getImages", null);
exports.ImageController = ImageController = ImageController_1 = __decorate([
    (0, common_1.Controller)('image')
], ImageController);
//# sourceMappingURL=image.contoller.js.map