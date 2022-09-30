const mongoose = require('mongoose');
const Category = mongoose.model('Category');


exports.getCategory = async () => {
    const result = await Category.find({}, '_id title active');

    return result;
}

exports.create = async (data) => {
    let category = Category(data);
    await category.save();
}

exports.read = async (id) => {
    const result = await Category.findById({ _id: id }, "_id title price description active")
    return result
}

exports.update = async (id, data) => {
    await Category.findByIdAndUpdate(id, {
        $set: {
            title: data.title,
            active: data.active
        }
    })
}

exports.delete = async(id) => {
    await Category.findByIdAndUpdate(id, {
        $set: {
            active: false
        }
    })
}