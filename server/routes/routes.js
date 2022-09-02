import express from "express";

import {getItem, createItem} from '../controllers/controller.js'

const router = express.Router();

//get
router.get("/", getItem);

//post
router.post('/', createItem)
//patch

export default router