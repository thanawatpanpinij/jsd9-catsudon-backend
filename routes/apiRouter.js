import { Router } from "express";
import menusRouter from "./menusRouter.js";
import ordersRouter from "./ordersRouter.js";
import userRouter from "./userRouter.js";
import authRouter from "./authRouter.js";
import healthRouter from "./healthRouter.js";

const router = Router();

router.use(healthRouter);
router.use(menusRouter);
router.use(ordersRouter);
router.use(userRouter);
router.use(authRouter);

export default router;
