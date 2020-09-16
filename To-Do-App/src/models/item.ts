import mongoose from 'mongoose';

export interface ItemI extends mongoose.Document {
    task: string;
    created_at?: Date;
    isDone?: boolean;
};


export const ItemScheme = new mongoose.Schema({
    task: {type: String, required: true},
    created_at: {type: Date, default: new Date()},
    isDone: {type: Boolean, default: false}
})

const Item = mongoose.model<ItemI>('items', ItemScheme);

type ItemType = ItemI | null;

export default Item;
export { ItemType };