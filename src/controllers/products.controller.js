import { getConnection, sql, queries } from "../database";
// import { getConnection, sql } from "../database/connection";
// import querys from "../database/querys";

export const getProducts = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getAllProduct);
    //   console.log(result);
    //   res.json("products");
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.error(error.message);
  }
};

export const createNewProduct = async (req, res) => {
  const { name, description } = req.body;
  let { quantity } = req.body;

  if (name == null || description == null) {
    return res.status(400).json({ msg: "Bad Request. Please Fill all fields" });
  }

  if (quantity == null) quantity = 0;

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("description", sql.Text, description)
      .input("quantity", sql.Int, quantity)
      .query(queries.addNewProduct);
    // console.log(name, description, quantity);
    res.json({ name, description, quantity });
  } catch (error) {
    res.status(500);
    res.error(error.message);
  }
};

export const getProductById = async (req, res) => {
  const { id } = req.params;
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("Id", id)
    .query(queries.getProductById);

  // console.log(result);
  res.send(result.recordset[0]);
};

export const deleteProductById = async (req, res) => {
  const { id } = req.params;
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("Id", id)
    .query(queries.deleteProductById);

  // console.log(result);
  // res.send(result);
  res.sendStatus(204);
};

export const getTotalProduct = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query(queries.getTotalProduct);

  // console.log(result);
  // res.send(result);
  // res.sendStatus(204);
  res.json(result.recordset[0][""]);
};

export const updateProductById = async (req, res) => {
  const { name, description, quantity } = req.body;
  const { id } = req.params;

  if ((name == null || description == null, quantity === null)) {
    return res.status(400).json({ msg: "Bad Request. Please Fill all fields" });
  }

  const pool = await getConnection();
  await pool
    .request()
    .input("name", sql.VarChar, name)
    .input("description", sql.Text, description)
    .input("quantity", sql.Int, quantity)
    .input("id", sql.Int, id)
    .query(queries.updateProductById);

  res.json({ name, description, quantity });
};
