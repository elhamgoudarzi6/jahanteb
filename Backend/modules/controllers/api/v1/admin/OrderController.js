const Controller = require(`${config.path.controller}/Controller`);
module.exports = new class OrderController extends Controller {
    updateStatusOrder(req, res) {
          let listFields={};
          if(req.body.statusOrder){ listFields.statusOrder=req.body.statusOrder}
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

    getAllOrder(req, res) {
        this.model.Order.find().sort({updatedAt:-1})
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
