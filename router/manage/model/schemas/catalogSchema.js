const mongoose = require('mongoose');

const catalogSchema = new mongoose.Schema({
	bookId: String, // 书id
	bookName: String, // 书名
	author: String, // 作者
	title: String, // 章节名称
	url: String, // 章节地址
	sectionId: String // 排序id
}, {
	collection: 'catalog'
})

module.exports = mongoose.model('catalog', catalogSchema)
