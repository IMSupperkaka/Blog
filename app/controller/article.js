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
    async index() {
        const { ctx } = this;
        let { page, pageSize, cId } = ctx.request.query;
        const list = await ctx.service.article.list(this.pageConfig(page, pageSize), { cId });
        return this.success(list);
    }

    /**
     * @desc 获取文章 详情
     * @method get
     */
    async show() {
        const { ctx } = this;
        let { id: art_id } = ctx.params;
        const list = await ctx.service.article.detail(art_id);
        if (list.errno != 0) {
            return this.fail({ errmsg: list.errmsg, status: list.status, errno: list.errno });
        }
        return this.success(list.data);
    }
}

module.exports = CategoryController;
