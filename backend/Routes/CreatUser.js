const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

router.post("/createuser", [
    body('email', 'Incorrect Email').isEmail(),
    body('name').isLength({ min: 5 }),
    body('password', 'Incorrect Password').isLength({ min: 5 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        await User.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
            location: req.body.location
        });
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.json({ success: false });
    }
});

router.post("/loginuser", [
    body('email', 'Incorrect Email').isEmail(),
    body('password', 'Incorrect Password').isLength({ min: 5 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const email = req.body.email;
    try {
        const userData = await User.findOne({ email });
        if (!userData || req.body.password !== userData.password) {
            return res.status(400).json({ errors: "Invalid credentials" });
        }
        // If login successful, include user data in the response
        return res.json({ success: true, user: userData });
    } catch (error) {
        console.error(error);
        res.json({ success: false });
    }
});

module.exports = router;
