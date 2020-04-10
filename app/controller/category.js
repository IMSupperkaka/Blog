'use strict';

const Controller = require('./base');

class CategoryController extends Controller {
    /**
     * @desc 获取分类
     * 
     */
    async getCategory() {
        console.log(11111111);
        const { ctx } = this;
        const list = await ctx.service.category.find(13);
        console.log(list);

        ctx.status = 200;
        ctx.status = 200;
        ctx.status = 200;
        ctx.status = 200;
        ctx.status = 200;

        ctx.set({
            status: 200,
        })

        console.log(ctx.status);

        console.log('-------');

        return this.success({
            id: 13,
            name: 'IMSupperkaka',
            account: 'IMSupperkaka',
            password: 'IMSupperkaka',
            created_at: '2020-01-27T03:46:44.000Z',
            updated_at: '2020-01-27T03:46:44.000Z' });
    }
}

module.exports = CategoryController;
