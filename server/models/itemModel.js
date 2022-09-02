import mongoose from "mongoose";

const stock = mongoose.Schema({
    title: String,
    description: String,
    tag: String,
    selectedFile: String,
    price: {
        type: Number,
        default: 0,
    },
    stock: {
        type: Number,
        default: 0
    },
    weight: {
        type: Number,
        default: 0
    },
    items: {
        type: Number,
        default: 0
    },
    
});

const ItemMessage = mongoose.model("bubbles-by-mandy", stock);

export default ItemMessage;
