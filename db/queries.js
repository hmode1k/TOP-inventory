const pool = require("./pool");

async function getAllCategories() {
  const { rows } = await pool.query("SELECT * FROM categories");
  return rows;
}

async function getAllGames() {
  const { rows } = await pool.query("SELECT * FROM games");
  return rows;
}

async function getCategoryById(id) {
  const { rows } = await pool.query("SELECT * FROM categories WHERE id = $1", [
    id,
  ]);
  return rows;
}

async function addCategory(categoryName) {
  await pool.query("INSERT INTO categories (category) VALUES ($1)", [
    categoryName,
  ]);
}

async function editCategory(name, id) {
  await pool.query("UPDATE categories SET category = $1 WHERE id = $2", [
    name,
    id,
  ]);
}

async function deleteCategory(id) {
  await pool.query("DELETE FROM categories WHERE id = $1", [id]);
}

module.exports = {
  getAllGames,
  getAllCategories,
  getCategoryById,
  addCategory,
  editCategory,
  deleteCategory,
};
