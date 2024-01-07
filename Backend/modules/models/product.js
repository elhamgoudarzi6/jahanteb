const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
    categoryID:{ type:mongoose.Schema.ObjectId,require, ref:'Category'},
    subCategoryID: { type:mongoose.Schema.ObjectId,require, ref:'subCategory'},
    discountID: { type:mongoose.Schema.ObjectId,require, ref:'Discount'},
    discountStatus:{type:Boolean,default:false},
    title: { type: String},
    price: { type: Number,default:0},
    detail: { type: String },
    features: { type: Array},
    featuresValue:{ type: Array},
    image: { type: String },
    help: { type: String },
    gallery:{type:Array},
    keywords:{type:String},
    imageDescription:{type:String},
    metaDescription:{type:String},
},{timestamps:true,toJSON:{virtuals:true}});
ProductSchema.virtual('Comment',{
    ref:'Comment',
    localField:'_id',
    foreignField:'productID',
});
ProductSchema.virtual('Category',{
    ref:'Category',
    localField:'categoryID',
    foreignField:'_id',
});
ProductSchema.virtual('SubCategory',{
    ref:'SubCategory',
    localField:'subCategoryID',
    foreignField:'_id',
});
ProductSchema.virtual('Discount',{
    ref:'Discount',
    localField:'discountID',
    foreignField:'_id',
});
module.exports = mongoose.model('Product', ProductSchema);
