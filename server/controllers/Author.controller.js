const Author = require("../models/Author.model");

module.exports.getAllAuthors  = (request, response) => {
	Author.find({})
	.then(Author => response.json(Author))
	.catch(err => response.json(err))
};

module.exports.createAuthor = (request, response) => {
	const { name } = request.body;
	const newAuthor = new Author({
		name
	});
	newAuthor
		.save()
		.then((Author) => response.json(Author))
		.catch((err) => response.json(err));
};
module.exports.updateAuthor = (request, response) => {
	Author.findOneAndUpdate({ _id: request.params.id }, request.body, {
		new: true
	})
		.then((updatedAuthor) => response.json(updatedAuthor))
		.catch((err) => response.json(err));
};

module.exports.deleteOne = (request, response) => {
	Author.deleteOne({ _id: request.params.id })
		.then((deleteConfirmation) => response.json(deleteConfirmation))
		.catch((err) => response.json(err));
};
