'use strict';

const Controller = require('egg').Controller;

class CategoryController extends Controller {
    /**
     * @desc 获取分类
     * 
     */
    async getCategory() {
        const { ctx } = this;
        const userId = 1;
        const userInfo = await ctx.service.category.find(userId);
        ctx.body = userInfo;
    }
}

module.exports = CategoryController;
