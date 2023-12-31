const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GenreSchema = new Schema({
	name: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('genres', GenreSchema);