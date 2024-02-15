const express = require('express');
const router = express.Router();

router.post('/productData', (req, res) => {
    try {
        //console.error(global.sample);
        res.send([global.sample,global.category]);
    } catch (error) {
        console.error(error.message);
        res.send('server error');
    }
});
module.exports=router;