"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsController = void 0;
const post_1 = require("../models/post");
class PostsController {
    static getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const posts = yield post_1.Post.find();
            res.json(posts);
        });
    }
    static get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //const post =await Post.findOne({'_id':req.params.id});
            const post = yield post_1.Post.findById(req.params.id);
            res.json(post);
        });
    }
    static store(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newPost = new post_1.Post({
                title: req.body.title,
                content: req.body.content,
                author: {
                    name: req.body.author_name,
                    email: req.body.author_email
                }
            });
            yield newPost.save();
            res.json(newPost);
        });
    }
    static update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield post_1.Post.findOne({ "_id": req.params.id });
            if (post != null) {
                post.title = req.body.title;
                if (req.body.content != null)
                    post.content = req.body.content;
                if (req.body.author_name != null)
                    post.author.name = req.body.author_name;
                if (req.body.author_email != null)
                    post.author.email = req.body.author_email;
                post.save();
            }
            res.json(post);
        });
    }
    static delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield post_1.Post.findOneAndDelete({
                '_id': req.params.id
            });
            res.json(post);
        });
    }
}
exports.PostsController = PostsController;
