const 
express = require('express'),
app = express(); 

require('dotenv').config()

require('./DL/db').connect()

app.use(require('cors')())
app.use(express.json())


app.use('/email',require('./routes/email.router'))


app.listen(3213,()=>console.log("##### Server is running #####"))


