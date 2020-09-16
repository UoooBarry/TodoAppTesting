"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemScheme = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
;
exports.ItemScheme = new mongoose_1.default.Schema({
    task: { type: String, required: true },
    created_at: { type: Date, default: new Date() },
    isDone: { type: Boolean, default: false }
});
const Item = mongoose_1.default.model('items', exports.ItemScheme);
exports.default = Item;
