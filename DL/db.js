const mongoose = require('mongoose')

async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI)
            .then(r => console.log("#### DB - Connection ####"))

    }
    catch (err) {
        console.log(err);
    }
}

module.exports = {connect}