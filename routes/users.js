import { Router } from "express";

const router = new Router ();


//*POST routes for Sign In
router.post ('/signin', async (req,res) =>{
    const user = {
        _id: '1',
        email: "user1@email.com",
        userName: 'User 1'
    };
    res.json(user);
});

//*POST routes for Sign Up
router.post ('/signup', async (req,res) =>{
    const user = {
        _id: '1',
        email: "user1@email.com",
        userName: 'User 1'
    };
    res.json(user);

});

export default router;