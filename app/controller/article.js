'use strict';

const Controller = require('./base');

class CategoryController extends Controller {
    /**
     * @desc 获取分类
     * 
     */
    async list() {
        const { ctx } = this;

        console.log(ctx.request.body);
        
        const list = await ctx.service.article.list(1, 10);
        
        return this.success({ a: 1 });
    }
}

module.exports = CategoryController;
