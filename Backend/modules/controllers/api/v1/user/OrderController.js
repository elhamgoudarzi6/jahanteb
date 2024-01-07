const Controller = require(`${config.path.controller}/Controller`);
module.exports = new class OrderController extends Controller {
    registerOrder(req, res) {
        req.checkBody('userID', 'وارد کردن فیلد آیدی کاربر الزامیست').notEmpty();
        req.checkBody('productID', 'وارد کردن آیدی محصول الزامیست').notEmpty();
        req.checkBody('count', 'وارد کردن فیلد تعداد الزامیست').notEmpty();
        if (this.showValidationErrors(req, res))
            return;
            let newOrder = new this.model.Order({
                userID:req.body.userID,
                productID:req.body.productID,
                count:req.body.count,
                date:req.body.date,
                description:req.body.description,
                discountCode:req.body.discountCode
            })
            newOrder.save(err => {
            if (err) throw err;
            return res.json({
                data: 'سفارش با موفقیت ثبت شد',
                success: true
            });
        })
    }

    updateOrder(req, res) {
          let listFields={};
          if(req.body.userID){ listFields.userID=req.body.userID}
          if(req.body.count){ listFields.count=req.body.count}
          if(req.body.date){ listFields.date=req.body.date}
          if(req.body.discountCode){ listFields.discountCode=req.body.discountCode}
          req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();
          if (this.showValidationErrors(req, res))
              return;
          this.model.Order.findByIdAndUpdate(req.params.id,listFields, (err, Order) => {
              if (err) throw err;
              if (Order) {
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

    deleteOrder(req, res) {
        req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();
        if (this.showValidationErrors(req, res))
            return;
        this.model.Order.findByIdAndRemove(req.params.id, (err, Order) => {
            if (err) throw err;
            if (Order) {
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

    getAllOrderByUser(req, res) {
        this.model.Order.find({userID:req.params.id}).sort({updatedAt:-1})
        .populate({path: 'User Product'})
        .exec((err, Order) => {
            if (err) throw err;
            if (Order) {
                return res.json({
                    data: Order,
                    success: true
                });
            }
            res.json({
                data: 'اطلاعاتی وجود ندارد',
                success: false
            })
        });
    }

    // getOrder(req, res) {
    //     req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();
    //     if (this.showValidationErrors(req, res))
    //         return;
    //     this.model.Order.findById(req.params.id,
    //          (err, Order) => {
    //         if (Order) {
    //             return res.json({
    //                 data: Order,
    //                 success: true
    //             })
    //         }
    //         res.json({
    //             data: 'یافت نشد',
    //             success: false
    //         })
    //     })
    // }
    
    
        getOrder(req, res) {
        this.model.Order.find({_id:req.params.id}).sort({updatedAt:-1})
        .populate({path: 'User Product'})
        .exec((err, Order) => {
            if (err) throw err;
            if (Order) {
                return res.json({
                    data: Order,
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
