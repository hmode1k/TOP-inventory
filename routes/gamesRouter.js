const Router = require("express");
const gamesRouter = Router();

gamesRouter.get("/"); //calls gamesController to get games list
gamesRouter.get("/create"); //calls GC to get the game creation page
gamesRouter.post("/create"); //calls GC to add game to db
gamesRouter.post("/delete"); //calls GC to delete game from db

module.exports = gamesRouter;
