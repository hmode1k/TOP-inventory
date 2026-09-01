const Router = require("express");
const categoriesRouter = Router();
const categoriesController = require("../controllers/categoriesController");

categoriesRouter.get("/", categoriesController.getAllCategories);
categoriesRouter.get("/create", categoriesController.createCategoryGet); //call categories controller to view the creation page
categoriesRouter.post("/create", categoriesController.addCategory); //call categories controller to add category
categoriesRouter.post("/:id/edit", categoriesController.editCategory);
categoriesRouter.get("/:id/delete", categoriesController.deleteCategory); //call categories controller to delete a category
categoriesRouter.get("/:id", categoriesController.getCategoryById); //call categories controller to view categories list

module.exports = categoriesRouter;
