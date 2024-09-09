import express from 'express';
import authMiddleware from '../middleWare/auth.js';
import { placeOrder, verifyOrder , userOrders, listOrders, updateOrderStatus} from '../controllers/orderControllers.js';



const orderRouter = express.Router();


orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/userorders", authMiddleware, userOrders);
orderRouter.get("/list", listOrders);
orderRouter.post("/status", updateOrderStatus);


export default orderRouter;