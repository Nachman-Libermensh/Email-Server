const emailModel = require('../models/email.model')

// CRUD
async function create(data) {
    return await emailModel.create(data)
}
async function read(filter) {
    return await emailModel.find({ ...filter, isActive: true })
}
async function readOne(filter) {
    return await emailModel.findOne({ ...filter, isActive: true })
}
async function update(id, data) {
    // return await emailModel.findOneAndUpdate({_id:id}, data,{new : true})
    return await emailModel.findByIdAndUpdate(id, data, { new: true })
}
async function del(id) {
    return await update(id, { isActive: false })
}

module.exports = { create, read, readOne, update, del }