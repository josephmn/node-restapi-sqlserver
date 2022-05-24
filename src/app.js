import express from "express";
import config from "./config";

import productsRoutes from "./routers/products.routers";

const app = express();

// settings
app.set("port", config.port);

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(productsRoutes);

export default app;
