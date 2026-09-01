const db = require("../db/queries");

async function getIndex(req, res) {
  const games = await db.getAllGames();
  const categories = await db.getAllCategories();

  res.render("index", { games: games, categories: categories });
}

module.exports = { getIndex };
