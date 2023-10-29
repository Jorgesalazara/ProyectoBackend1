import { Router } from "express";
import Pedido from "../models/Pedidos";

const router = Router();

router.post("/register", async (req, res) => {
    const { user_id, restaurant_id, status, active } = req.body;
    console.log(req.body);
    const createPedido = await Pedido.create({
        user_id: user_id,
        restaurant_id: restaurant_id,
        status: status,
        active: active,
    });
    
    res.json(createPedido);
    }
);

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const findPedido = await Pedido.findOne({ _id: id});
    res.json(findPedido);
});



router.get('/', async (req, res) => {
    const { user_id, restaurant_id, date } = req.query;
    const findPedido = await Pedido.find({ user_id: user_id, restaurant_id: restaurant_id, date: date});
    res.json(findPedido);
}
);


router.get('/', async (req, res) => {
    const { status } = req.query;
    const findPedido = await Pedido.find({ status: 'En camino'});
    res.json(findPedido);
}
);

router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const { user_id, restaurant_id, status, active } = req.body;
    const updatePedido = await Pedido.updateOne({ _id: id }, {
        user_id: user_id,
        restaurant_id: restaurant_id,
        status: 'Creado',
        active: active,
    });
    res.json(updatePedido);
}
);

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    deletePedido = await Pedido.findById({ _id: id });
    deletePedido.active = false;
    res.json(deletePedido);
}
);

export default router;








