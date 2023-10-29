import { Router } from "express";
import Restaurant from "../models/restaurant.js";

const router = Router()

router.post("/register",async (req, res) => {
    const { name,address,category,inventory,active } = req.body;
    console.log(req.body) 
    const createRestaurant = await Restaurant.create({
        name: name,
        address: address,
        category: category,
        inventory: inventory,
        active: active,
    })
    
    res.json(createRestaurant);
}
);



router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const findRestaurant = await Restaurant.findOne({ _id: id});
    res.json(findRestaurant);
}
);

//endpoint to read data of a restaurant by category or the names
router.get('/', async (req, res) => {        
    const { category, name } = req.query;
    const findRestaurant = await Restaurant.find({ category: category, name: name});
    res.json(findRestaurant);
}
);


router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const { name,address,category,inventory,active } = req.body;
    const updateRestaurant = await Restaurant.updateOne({ _id: id }, {
        name: name,
        address: address,
        category: category,
        inventory: inventory,
        active: active,
    });
    res.json(updateRestaurant);
}
);

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    deleteRestaurant = await Restaurant.findById({ _id: id });
    res.json(deleteRestaurant);
}
);

export default router;