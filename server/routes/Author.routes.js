const AuthorController = require("../controllers/Author.controller");

module.exports = (app) => {
	app.get("/api/author", AuthorController.getAllAuthors);
	app.post("/api/author", AuthorController.createAuthor);
  app.patch('/api/author/:id', AuthorController.updateAuthor);
  app.delete("/api/author/:id", AuthorController.deleteOne);


};
