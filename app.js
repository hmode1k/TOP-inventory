// app.js
const express = require("express");
const app = express();
const path = require("node:path");
const mainController = require("./controllers/mainController");
const categoriesRouter = require("./routes/categoriesRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.get("/", mainController.getIndex);
app.use("/category", categoriesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Express app listening on port ${PORT}!`);
});
