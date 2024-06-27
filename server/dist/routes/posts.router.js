"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postsRouter = void 0;
const express_1 = __importDefault(require("express"));
const posts_controller_1 = require("../controllers/posts.controller");
const postsRouter = express_1.default.Router();
exports.postsRouter = postsRouter;
postsRouter.get('/', posts_controller_1.PostsController.getAll);
postsRouter.get('/:id', posts_controller_1.PostsController.get);
postsRouter.post('/', posts_controller_1.PostsController.store);
postsRouter.put('/:id', posts_controller_1.PostsController.update);
postsRouter.delete('/:id', posts_controller_1.PostsController.delete);
