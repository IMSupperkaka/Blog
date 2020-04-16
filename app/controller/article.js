'use strict';

const Controller = require('./base');

class CategoryController extends Controller {
    /**
     * @desc 获取分类
     * 
     */
    async list() {
        const { ctx } = this;
        let { page, pageSize } = ctx.request.query;
        const list = await ctx.service.article.list(this.pageConfig(page, pageSize));
        return this.success(list);
    }
}

module.exports = CategoryController;
