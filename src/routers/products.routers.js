import { Router } from "express";

import { createNewProduct, deleteProductById, getProductById, getProducts, getTotalProduct, updateProductById } from "../controllers/products.controller";

const router = Router();

router.get("/products", getProducts);

router.post("/products", createNewProduct);

router.get("/products/count", getTotalProduct);

router.get("/products/:id", getProductById);

router.delete("/products/:id", deleteProductById);

router.put("/products/:id", updateProductById);

export default router;
