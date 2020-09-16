"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const item_1 = __importDefault(require("../models/item"));
const router = express_1.default.Router();
//GET /api/items
router.get('/', (req, res) => {
    item_1.default.find()
        .then((items) => {
        res.json({
            items
        });
    })
        .catch(() => {
        res.sendStatus(500);
    });
});
//GET /api/items/:id
router.get('/:id', (req, res) => {
    //id = req.params.id
    item_1.default.findById(req.params.id)
        .then((item) => {
        res.json({
            item
        });
    })
        .catch(() => {
        res.sendStatus(404);
    });
});
//POST /api/items/create
router.post('/create', (req, res) => {
    item_1.default.create({
        task: req.body.task,
    })
        .then((item) => {
        res.json({
            message: 'success',
            item
        });
    })
        .catch(() => {
        res.sendStatus(500);
    });
});
//PATCH /api/items/:id
router.patch('/:id', (req, res) => {
    item_1.default.findById(req.params.id)
        .then((item) => {
        if (!item)
            throw 'Item not fond';
        item.isDone = !item.isDone;
        item.save();
        res.json({
            message: 'success',
            item
        });
    })
        .catch(() => {
        res.sendStatus(404);
    });
});
//DELETE /api/items/:id
router.delete('/:id', (req, res) => {
    item_1.default.findByIdAndRemove(req.params.id)
        .then(() => {
        res.json({
            message: 'success'
        });
    })
        .catch(() => {
        res.sendStatus(404);
    });
});
exports.default = router;
