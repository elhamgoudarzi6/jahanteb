const express = require('express');
const router = express.Router();
const adminRouter = express.Router();

// middlewares
const apiAuthAdminUser = require('./middleware/apiAuthAdmin');
const apiAuth = require('./middleware/apiAuth');
const apiAdmin = require('./middleware/apiAdmin');
const { uploadImage } = require('./middleware/UploadMiddleware');

//user Controllers
const { api: ControllerApi } = config.path.controllers;
const UploadController = require(`${ControllerApi}/v1/user/UploadController`);
const AuthUserController = require(`${ControllerApi}/v1/user/AuthUserController`);
const CommentController = require(`${ControllerApi}/v1/user/CommentController`);
const SubscriptionController = require(`${ControllerApi}/v1/user/SubscriptionController`);
const CategoryController = require(`${ControllerApi}/v1/user/CategoryController`);
const ProductController = require(`${ControllerApi}/v1/user/ProductController`);
const OrderController = require(`${ControllerApi}/v1/user/OrderController`);
const NewsController = require(`${ControllerApi}/v1/user/NewsController`);
const ContactUsController = require(`${ControllerApi}/v1/user/ContactUsController`);
const HomePageController = require(`${ControllerApi}/v1/user/HomePageController`);

//upload 
router.post('/upload', uploadImage.single('file'), UploadController.uploadImage.bind(UploadController));
//multi file
// router.post('/multiUpload',uploadFiles,UploadController.uploadFiles.bind(UploadController));
//delete file uploaded in server
router.post('/deleteFile',UploadController.deleteFile.bind(UploadController));


//home page 
router.get('/getAllFaq', HomePageController.getAllFaq.bind(HomePageController));
router.get('/getCatalog',HomePageController.getCatalog.bind(HomePageController));


// auth user
router.post('/registerUser', AuthUserController.registerUser.bind(AuthUserController));
router.post('/loginUser', AuthUserController.loginUser.bind(AuthUserController));
router.put('/updateUser/:id', AuthUserController.updateUser.bind(AuthUserController));
router.get('/getUser/:id', AuthUserController.getUser.bind(AuthUserController));
router.delete('/deleteUser/:id', AuthUserController.deleteUser.bind(AuthUserController));

//changeMobileNumber
router.put('/changeMobileNumber/:id', AuthUserController.changeMobileNumber.bind(AuthUserController));
//send email
router.post('/sendCodeToEmail', AuthUserController.sendCodeToEmail.bind(AuthUserController));

//contact us
router.post('/registerContactUs', ContactUsController.registerContactUs.bind(ContactUsController));

// order
router.post('/registerOrder', OrderController.registerOrder.bind(OrderController));
router.delete('/deleteOrder/:id', OrderController.deleteOrder.bind(OrderController));
router.put('/updateOrder/:id', OrderController.updateOrder.bind(OrderController));
router.get('/getAllOrderByUser/:id', OrderController.getAllOrderByUser.bind(OrderController));
router.get('/getOrder/:id', OrderController.getOrder.bind(OrderController));

//news 
router.get('/getNews/:id', NewsController.getNews.bind(NewsController));
router.get('/getAllNews', NewsController.getAllNews.bind(NewsController));
router.get('/getLatestNews', NewsController.getLatestNews.bind(NewsController));
router.get('/getAllTagNews', NewsController.getAllTagNews.bind(NewsController));

//password
router.put('/resetPassword', AuthUserController.resetPassword.bind(AuthUserController));
router.put('/changePassword/:id', AuthUserController.changePassword.bind(AuthUserController));


//comment
router.post('/registerComment', CommentController.registerComment.bind(CommentController));
router.get('/countComment/:id', CommentController.countComment.bind(CommentController));
router.get('/allCommentForProduct/:id', CommentController.allCommentForProduct.bind(CommentController));

//subscription
router.post('/addEmailSubscription', SubscriptionController.addEmailSubscription.bind(SubscriptionController));
router.post('/addSmsSubscription', SubscriptionController.addSmsSubscription.bind(SubscriptionController));

//category
router.get('/getAllCategory', CategoryController.getAllCategory.bind(CategoryController));
router.get('/getAllSubCategory/:id', CategoryController.getAllSubCategory.bind(CategoryController));

//product

router.get('/getAllProduct', ProductController.getAllProduct.bind(ProductController));
router.get('/getProduct/:id', ProductController.getProduct.bind(ProductController));


//allProductByCategoryID
router.get('/allProductByCategoryID/:id', ProductController.allProductByCategoryID.bind(ProductController));

//allProductBySubCategoryID
router.get('/allProductBySubCategoryID/:id', ProductController.allProductBySubCategoryID.bind(ProductController));

//advanceSearchProduct
router.post('/advanceSearchProduct', ProductController.advanceSearchProduct.bind(ProductController));

//discountProduct
router.get('/discountProduct', ProductController.discountProduct.bind(ProductController));

//newest Products
router.get('/newestProduct', ProductController.newestProduct.bind(ProductController));

//allProductBySearch
router.post('/allProductBySearch', ProductController.allProductBySearch.bind(ProductController));


router.use('', router);
module.exports = router;
