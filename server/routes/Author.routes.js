const AuthorController = require("../controllers/Author.controller");

module.exports = (app) => {
  app.get("/api/author", AuthorController.findAllAuthors);
  app.get("/api/author/:id", AuthorController.getDetail);
  app.post("/api/author", AuthorController.createAuthor);
};