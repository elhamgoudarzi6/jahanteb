const Controller = require(`${config.path.controller}/Controller`);
module.exports = new class ProductController extends Controller {
    registerProduct(req, res) {
        req.checkBody('title', 'وارد کردن فیلد عنوان الزامیست').notEmpty();
        req.checkBody('categoryID', 'وارد کردن کد دسته الزامیست').notEmpty();
        req.checkBody('subCategoryID', 'وارد کردن کد زیر دسته الزامیست').notEmpty();
        if (this.showValidationErrors(req, res))
            return;
            let newProduct = new this.model.Product({
                categoryID:req.body.categoryID,
                subCategoryID:req.body.subCategoryID,
                title:req.body.title,
                count:req.body.count,
                detail:req.body.detail,
                features:req.body.features,
                featuresValue:req.body.featuresValue,
                image:req.body.image,
                help:req.body.help,
                gallery:req.body.gallery,
                price:req.body.price,
                discountID:req.body.discountID,
                discountStatus:req.body.discountStatus,
                keywords:req.body.keywords,
                imageDescription:req.body.imageDescription,
                metaDescription:req.body.metaDescription,

            })
            newProduct.save(err => {
            if (err) throw err;
            return res.json({
                data: 'محصول با موفقیت ثبت شد',
                success: true
            });
        })
    }

    updateProduct(req, res) {
        let listFields={};
        if(req.body.featuresValue){ listFields.featuresValue=req.body.featuresValue}
        if(req.body.categoryID){ listFields.categoryID=req.body.categoryID}
        if(req.body.subCategoryID){ listFields.subCategoryID=req.body.subCategoryID}
        if(req.body.title){ listFields.title=req.body.title}
        if(req.body.count){ listFields.count=req.body.count}
        if(req.body.detail){ listFields.detail=req.body.detail}
        if(req.body.features){ listFields.features=req.body.features}
        if(req.body.image){ listFields.image=req.body.image}
        if(req.body.help){ listFields.help=req.body.help}
        if(req.body.gallery){ listFields.gallery=req.body.gallery}
        if(req.body.price){ listFields.price=req.body.price}
        if(req.body.discountID){ listFields.discountID=req.body.discountID}
        if(req.body.discountStatus){ listFields.discountStatus=req.body.discountStatus}
        if(req.body.keywords){ listFields.keywords=req.body.keywords}
        if(req.body.imageDescription){ listFields.imageDescription=req.body.imageDescription}
        if(req.body.metaDescription){ listFields.metaDescription=req.body.metaDescription}

          req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();
          if (this.showValidationErrors(req, res))
              return;
          this.model.Product.findByIdAndUpdate(req.params.id,listFields, (err, Product) => {
              if (err) throw err;
              if (Product) {
                  return res.json({
                      data: 'اطلاعات  با موفقیت بروز رسانی شد',
                      success: true
                  });
              }
              res.status(404).json({
                  data: 'چنین اطلاعاتی وجود ندارد',
                  success: false
              });
  
          });
    }

    deleteProduct(req, res) {
        req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();
        if (this.showValidationErrors(req, res))
            return;
        this.model.Product.findByIdAndRemove(req.params.id, (err, Product) => {
            if (err) throw err;
            if (Product) {
                return res.json({
                    data: 'محصول با موفقیت حذف شد',
                    success: true
                });
            }
            res.status(404).json({
                data: 'چنین محصولی وجود ندارد',
                success: false
            });
        });
    }

    getAllProduct(req, res) {
        this.model.Product.find().sort({updatedAt:-1})
        .populate({path: 'Category SubCategory Comment Discount',populate:{path: 'User',model: 'User'}})
        .exec((err, Product) => {
            if (err) throw err;
            if (Product) {
                return res.json({
                    data: Product,
                    success: true
                });
            }
            res.json({
                data: 'اطلاعاتی وجود ندارد',
                success: false
            })
        });
    }

        getProduct(req, res) {
        this.model.Product.find({ _id:req.params.id })
        .populate({path: 'Category SubCategory Comment Discount',populate:{path: 'User',model: 'User'}})
        .exec((err, Product) => {
            if (err) res.json({
                data: 'اطلاعاتی وجود ندارد',
                success: false
            })
            if (Product) {
                return res.json({
                    data: Product,
                    success: true
                });
            }
            res.json({
                data: 'اطلاعاتی وجود ندارد',
                success: false
            })
        });
    }

}
