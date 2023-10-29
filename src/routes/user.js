import { Router } from "express";
import User from "../models/user.js";

const router = Router()


router.post("/register",async (req, res) => {
    const { first_name,last_name,password,email, phone, address, role } = req.body;
    console.log(req.body) 
    const createUser = await User.create({
        first_name: first_name,
        last_name: last_name,
        password: password,
        email: email,
        phone: phone,
        address: address,
        role: role,
    })
    
    res.json(createUser);
}
);

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const findUser = await User.findOne({ _id: id});
    res.json(findUser);
});

router.get('/:email/:password', async (req, res) => {
    const { email, password } = req.params;
    const findUser = await User.findOne({ email: email, password: password});
    res.json(findUser);
});

router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const { first_name,last_name,password,email, phone, address, role } = req.body;
    const updateUser = await User.updateOne({ _id: id }, {
        first_name: first_name,
        last_name: last_name,
        password: password,
        email: email,
        phone: phone,
        address: address,
        role: role,
    });
    res.json(updateUser);
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    deleteUser = await User.findById({ _id: id });
    deleteUser.active = false;
    res.json(deleteUser);
});







export default router;