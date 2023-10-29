import {Router} from 'express';
import Product from '../models/product.js';

const router = Router();

router.post("/register",async (req, res) => {
    const { name,price,restaurant_id,category,description,active } = req.body;
    console.log(req.body) 
    const createProduct = await Product.create({
        name: name,
        price: price,
        restaurant_id: restaurant_id,
        category: category,
        description: description,
        active: active,
    })
    
    res.json(createProduct);
}
);



router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const findProduct = await Product.findOne({ _id: id});
    res.json(findProduct);
}
);

router.get('/', async (req, res) => {        
    const { category, restaurant_id } = req.query;
    const findProduct = await Product.find({ category: category, restaurant_id: restaurant_id});
    res.json(findProduct);
}
);

router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const { name,price,restaurant_id,category,description,active } = req.body;
    const updateProduct = await Product.updateOne({ _id: id }, {
        name: name,
        price: price,
        restaurant_id: restaurant_id,
        category: category,
        description: description,
        active: active,
    });
    res.json(updateProduct);
}
);

//endpoint that deactivates product by id

router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const { active } = req.body;
    const updateProduct = await Product.updateOne({ _id: id }, {
        active: false,
    });
    res.json(updateProduct);
}
);

