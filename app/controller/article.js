'use strict';

const Controller = require('./base');

class CategoryController extends Controller {
    /**
     * @desc 获取文章 分页
     * @method get
     * @param {int} page 页码
     * @param {int} pageSize 每页显示数 默认10
     * @param {int} cId 分类id
     */
    async list() {
        const { ctx } = this;
        let { page, pageSize, cId } = ctx.request.query;
        const list = await ctx.service.article.list(this.pageConfig(page, pageSize), { cId });
        return this.success(list);
    }
}

module.exports = CategoryController;
