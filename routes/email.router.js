const express = require('express'),
    router = express.Router();

const emailService = require('../BL/email.service')
const { auth } = require('../middlewares/auth')

router.get('/', async (req, res) => {
    try {
        let result = await emailService.getAllRecieved()
        res.send(result)
    }
    catch (err) {
        res.status(400).send(err.msg || err.message || "wrong")
    }

})
router.post('/:emailId', async (req, res) => {
    try {
        let result = await emailService.addNewMessageToEmail(req.params.emailId, req.body)
        res.send(result)
    }
    catch (err) {
        res.status(400).send(err.msg || err.message || "wrong")
    }

})



module.exports = router;