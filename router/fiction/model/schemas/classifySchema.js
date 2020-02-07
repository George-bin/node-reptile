const mongoose = require('mongoose');

const classifySchema = new mongoose.Schema({
  id: String, // 分类id
  name: String, // 分类名称
  createTime: Date, // 创建时间
	updateTime: Date // 更新时间
}, {
  collection: 'classify_list'
})

module.exports = mongoose.model('classify_list', classifySchema)
