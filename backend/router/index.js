import express                              from 'express';
import authToken                            from '../middlewares/authToken.js';
import authorizeRole                        from '../middlewares/roleMiddleware.js';
import registerUserCtrl                     from '../controllers/auth/register.js';
import loginUserCtrl                        from '../controllers/auth/login.js';
import logoutUserCtrl                       from '../controllers/auth/logout.js';
import getUserCtrl                          from '../controllers/user/getUser.js';
import getAllUsersCtrl                      from '../controllers/user/getAllUsers.js';
import addProductCtrl                       from '../controllers/product/addProduct.js';
import getAllProductsCtrl                   from '../controllers/product/getAllProducts.js';
import getProductCtrl                       from '../controllers/product/getProduct.js';
import editProductCtrl                      from '../controllers/product/editProduct.js';
import deleteProductCtrl                    from '../controllers/product/deleteProduct.js';
import deleteImageProductCtrl               from '../controllers/product/deleteImage.js';
import addProductToCartCtrl                 from '../controllers/cart/addProductToCart.js';
import allProductsToCartCtrl                from '../controllers/cart/allProductsToCart.js';
import countProductsToCartCtrl              from '../controllers/cart/countProductsToCart.js';
import editQuantityToCartCtrl               from '../controllers/cart/editQuantityToCart.js';
import deleteProductToCartCtrl              from '../controllers/cart/deleteProductToCart.js';
import paymentCtrl                          from '../controllers/order/payment.js';
import webhookCtrl                          from '../controllers/order/webhook.js';
import getAllOrderByUserCtrl                from '../controllers/order/getAllOrderByUser.js';
import getAllOrderCtrl                      from '../controllers/order/getAllOrder.js';
import updateStatusCtrl                     from '../controllers/order/updateStatus.js';

const router = express.Router();

//  auth routes
router.get      (    '/auth/logout',                 logoutUserCtrl);
router.post     (    '/auth/register',               registerUserCtrl);
router.post     (    '/auth/login',                  loginUserCtrl);

//  user routes
router.get      (    '/user',                        authToken, getUserCtrl);
router.get      (    '/users',                       authToken, authorizeRole('ADMIN'), getAllUsersCtrl);

//  product routes
router.get      (    '/product/:id',                 getProductCtrl);
router.get      (    '/products',                    getAllProductsCtrl);
router.post     (    '/product',                     authToken, authorizeRole('ADMIN'), addProductCtrl);
router.put      (    '/product',                     authToken, authorizeRole('ADMIN'), editProductCtrl);
router.delete   (    '/product/:id',                 authToken, authorizeRole('ADMIN'), deleteProductCtrl);
router.delete   (    '/product/image',               authToken, authorizeRole('ADMIN'), deleteImageProductCtrl);

// cart routes
router.get      (    '/cart',                        authToken, allProductsToCartCtrl);
router.get      (    '/cart/count',                  authToken, countProductsToCartCtrl);
router.post     (    '/cart',                        authToken, addProductToCartCtrl);
router.put      (    '/cart',                        authToken, editQuantityToCartCtrl);
router.delete   (    '/cart/:id',                    authToken, deleteProductToCartCtrl);

// payment and order routes
router.get      (    '/order/user',                  authToken, getAllOrderByUserCtrl);
router.get      (    '/order',                       authToken, authorizeRole('ADMIN'), getAllOrderCtrl);
router.post     (    '/checkout',                    authToken, paymentCtrl);
router.post     (    '/webhook',                     webhookCtrl);
router.put      (    '/order/update-status',         authToken, updateStatusCtrl);

export default router;