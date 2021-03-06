const Catalog = require('./schemas/catalogSchema.js');
const SectionContent = require('./schemas/sectionContentSchema.js');
const Book = require('./schemas/bookSchema.js');
const Classify = require('./schemas/classifySchema.js');
const Label = require('./schemas/labelSchema.js');
const User = require('./schemas/userSchema.js');
const ManageUser = require('./schemas/bookManageUserSchema.js');

module.exports = {
	Catalog,
	SectionContent,
	Book,
	Classify,
	Label,
	User,
	ManageUser
}
