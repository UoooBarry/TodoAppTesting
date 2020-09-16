"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const DBHOST = process.env.DBHOST || 'localhost';
const DBPORT = process.env.DBPORT || '27017';
const DBNAME = process.env.DBNAME || 'to-do';
const url = `mongodb://${DBHOST}:${DBPORT}/${DBNAME}`;
mongoose_1.default.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
const db = mongoose_1.default.connection;
db.on('error', (err) => {
    console.log(err);
});
exports.default = db;
