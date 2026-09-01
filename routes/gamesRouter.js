const Router = require("express");
const gamesRouter = Router();
const gamesController = require("../controllers/gamesController");

gamesRouter.get("/", gamesController.getAllGames); //calls gamesController to get games list
gamesRouter.get("/create", gamesController.createGame); //calls GC to get the game creation page
gamesRouter.post("/create", gamesController.addGame); //calls GC to add game to db
gamesRouter.get("/:id", gamesController.getGame);
gamesRouter.post("/:id/edit", gamesController.editGame);
gamesRouter.get("/:id/delete", gamesController.deleteGame);

module.exports = gamesRouter;
