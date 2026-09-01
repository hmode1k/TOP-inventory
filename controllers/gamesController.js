const db = require("../db/queries");

async function getAllGames(req, res) {
  const games = await db.getAllGames();
  res.send(games);
}

async function createGame(req, res) {
  const categories = await db.getAllCategories();
  res.render("gameCreate", { categories: categories });
}

async function addGame(req, res) {
  const { name, description, category } = req.body;
  await db.addGame(name, description, category);
  res.redirect("/");
}

async function getGame(req, res) {
  const id = req.params.id;
  const game = await db.getGameById(id);
  const categories = await db.getAllCategories();
  console.log(game);
  res.render("game", { game: game, categories: categories });
}

async function editGame(req, res) {
  const id = req.params.id;
  const { name, description, category } = req.body;
  await db.editGame(name, description, category, id);
  res.redirect("/");
}

async function deleteGame(req, res) {
  const id = req.params.id;
  await db.deleteGame(id);
  res.redirect("/");
}

module.exports = {
  createGame,
  getAllGames,
  addGame,
  getGame,
  deleteGame,
  editGame,
};
