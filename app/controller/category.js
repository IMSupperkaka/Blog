'use strict';

const Controller = require('./base');

class CategoryController extends Controller {
    /**
     * @desc 获取分类
     * 
     */
    async getCategory() {
        const { ctx } = this;
        const list = await ctx.service.category.list();
        console.log(list)
        return this.success(list);
    }
}

module.exports = CategoryController;
