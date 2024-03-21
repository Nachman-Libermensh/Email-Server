const emailController = require('../DL/controllers/email.controller')
const messageController = require('../DL/controllers/message.controller')


async function getAllRecieved() {
        return await emailController.read({},true)
}
async function addNewMessageToEmail(emailId, msg) {
        let msgDB = await messageController.create(msg)
        let email = await emailController.readOne({ _id: emailId })
        email.msg.push(msgDB._id)
        return await email.save()

}
module.exports = { getAllRecieved,addNewMessageToEmail }