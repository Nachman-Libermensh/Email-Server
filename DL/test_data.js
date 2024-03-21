const { create, read, readOne, update, del } =
    require('./controllers/user.controller')


async function go() {
    require('dotenv').config()
    require('./db').connect()

    let user = {
        email: "user1@gmail.com",
        fullName: "Moshe Cohen",
        password: "123qwe",
        avatar: "http://",
        emails: [],
    }

    let res = await create(user)
    console.log("#############################");
    console.log(res);
    console.log("#############################");

}

go()
