"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const post_1 = require("./models/post");
const app = (0, express_1.default)();
exports.app = app;
mongoose_1.default.connect("mongodb://localhost:27017/blog")
    .then(() => {
    console.log("prisijungiame prie MongoDB");
    const naujasIrasas = new post_1.Post({
        title: "Antro irasas",
        content: "Antro iraso tekstas"
    });
    console.log(naujasIrasas);
    naujasIrasas.save();
})
    .catch((error) => console.log(error));
