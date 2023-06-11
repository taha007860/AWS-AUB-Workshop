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
var PostController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const common_1 = require("@nestjs/common");
const PostDTO_1 = require("./dto/PostDTO");
const PostQueryResponseDTO_1 = require("./dto/PostQueryResponseDTO");
const post_service_1 = require("./post.service");
let PostController = exports.PostController = PostController_1 = class PostController {
    async createPost(post) {
        console.log('post post request');
        const identifier = "post" + PostController_1.id;
        post.id = identifier;
        PostController_1.postMap.set(identifier, post);
        const service = new post_service_1.PostService();
        service.insert(post);
        console.log("database call pass");
        PostController_1.id++;
        return post;
    }
    async getPost(postId) {
        console.log('hello post get request');
        const service = new post_service_1.PostService();
        const post = new PostDTO_1.PostDTO();
        post.id = postId;
        return service.get(post);
    }
    async getPosts() {
        console.log('hello post get posts');
        const posts = new PostQueryResponseDTO_1.PostQueryResponseDTO();
        console.log(posts);
        posts.posts = [...PostController_1.postMap.values()];
        console.log(posts);
        return posts;
    }
};
PostController.postMap = new Map();
PostController.id = 1;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PostDTO_1.PostDTO]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "createPost", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "getPost", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PostController.prototype, "getPosts", null);
exports.PostController = PostController = PostController_1 = __decorate([
    (0, common_1.Controller)('post')
], PostController);
//# sourceMappingURL=post.controller.js.map