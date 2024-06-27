"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const posts_router_1 = require("./routes/posts.router");
const app = (0, express_1.default)();
exports.app = app;
mongoose_1.default.connect("mongodb://localhost:27017/blog")
    .then(() => {
    console.log("prisijungiame prie MongoDB");
})
    .catch((error) => console.log(error));
app.use(express_1.default.json());
app.use("/posts", posts_router_1.postsRouter);
