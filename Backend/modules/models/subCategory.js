const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SubCategorySchema = new Schema({
    categoryID:{ type:mongoose.Schema.ObjectId,require, ref:'Category'},
    title: { type: String, required: true },
});
module.exports = mongoose.model('SubCategory', SubCategorySchema);
