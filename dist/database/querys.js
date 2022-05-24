"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queries = void 0;
var queries = {
  getAllProduct: 'SELECT * FROM products',
  addNewProduct: 'INSERT INTO Products (Name, Description, Quantity) VALUES (@name, @description, @quantity)',
  getProductById: 'SELECT * FROM Products where id = @id',
  deleteProductById: 'DELETE FROM Products where id = @id',
  getTotalProduct: 'SELECT count(*) FROM Products',
  updateProductById: 'UPDATE Products set Name = @name, Description = @description, Quantity = @quantity where Id = @id'
};
exports.queries = queries;