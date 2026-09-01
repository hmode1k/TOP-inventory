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

async function getGameById(id) {
  const { rows } = await pool.query("SELECT * FROM games WHERE id = $1", [id]);
  return rows;
}

async function addGame(name, description, categoryId) {
  await pool.query(
    "INSERT INTO games (game_name, game_description, category_id) VALUES ($1, $2, $3)",
    [name, description, categoryId],
  );
}

async function editGame(name, description, categoryId, gameId) {
  await pool.query(
    "UPDATE games SET game_name = $1, game_description = $2, category_id = $3 WHERE id = $4",
    [name, description, categoryId, gameId],
  );
}

async function deleteGame(id) {
  await pool.query("DELETE FROM games WHERE id = $1", [id]);
}

module.exports = {
  getAllGames,
  getAllCategories,
  getCategoryById,
  addCategory,
  editCategory,
  deleteCategory,
  getGameById,
  addGame,
  editGame,
  deleteGame,
};
