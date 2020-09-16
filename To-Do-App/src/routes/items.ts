import express,{Request, Response} from 'express';
import Item, { ItemType } from '../models/item';
const router = express.Router();


//GET /api/items
router.get('/', (req: Request, res:Response) => {
   Item.find()
        .then((items) => {
            res.json({
                items
            })
        })
        .catch(() => {
            res.sendStatus(500);
        })
   
});

//GET /api/items/:id
router.get('/:id', (req: Request, res:Response) => {
    //id = req.params.id
    Item.findById(req.params.id)
        .then((item: ItemType) => {
            res.json({
                item
            })
        })
        .catch(() => {
            res.sendStatus(404);
        })
})

//POST /api/items/create
router.post('/create', (req:Request, res:Response) => {
    Item.create({
        task: req.body.task,
    })
        .then((item: ItemType) => {
            res.json({
                message: 'success',
                item
            });
        })
        .catch(() => {
            res.sendStatus(500);
        })
})

//PATCH /api/items/:id
router.patch('/:id', (req: Request, res: Response) => {
    Item.findById(req.params.id)
        .then((item: ItemType) => {
            if(!item) throw 'Item not fond';
            item.isDone = !item.isDone;
            item.save();
            res.json({
                message: 'success',
                item
            });
        })
        .catch(() => {
            res.sendStatus(404);
        })
})

//DELETE /api/items/:id
router.delete('/:id', (req: Request, res: Response) => {
    Item.findByIdAndRemove(req.params.id)
        .then(() => {
            res.json({
                message: 'success'
            });
        })
        .catch(() => {
            res.sendStatus(404);
        })
})


export default router;