const db = require("../db/queries");

async function getAllCategories(req, res) {
  const categories = await db.getAllCategories();
  res.render("index", { categories: categories });
}

async function getCategoryById(req, res) {
  const id = req.params.id;
  const category = await db.getCategoryById(id);
  res.render("category", { category: category });
}

function createCategoryGet(req, res) {
  res.render("categoryCreate");
}

async function addCategory(req, res) {
  const { categoryName } = req.body;
  await db.addCategory(categoryName);
  res.redirect("/");
}

async function editCategory(req, res) {
  const { categoryName } = req.body;
  const id = req.params.id;
  await db.editCategory(categoryName, id);
  res.redirect("/");
}

async function deleteCategory(req, res) {
  const id = req.params.id;
  await db.deleteCategory(id);
  res.redirect("/");
}

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategoryGet,
  addCategory,
  editCategory,
  deleteCategory,
};
