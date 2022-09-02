import ItemMessage from "../models/itemModel.js";

//get
export const getItem = async (req, res) => {
    try {
        const itemMessages = await ItemMessage.find();
        res.status(200).json(itemMessages);
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

//post
export const createItem = async (req, res) => {
    const body = req.body;
    const newItem = new ItemMessage(body);

    try {
        await newItem.save();
        
        res.status(201).json(newItem)
    } catch (error) {
        res.status(409).json({ message: error });
    }
};
