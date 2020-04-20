'use strict';

const Controller = require('./base');

class CommentController extends Controller {
    /**
     * @desc 获取主评论 分页
     * @method get
     * @param {int} art_id 文章id
     */
    async list() {
        const { ctx } = this;
        let { page, pageSize, art_id } = ctx.request.query;
        const list = await ctx.service.comment.list(this.pageConfig(page, pageSize), { art_id });
        return this.success(list);
    }

    /**
     * @desc 获取主评论 分页
     * @method get
     * @param {int} art_id 文章id
     * @param {int} parent_id 父级评论id
     */
    async more() {
        const { ctx } = this;
        let { art_id, parent_id } = ctx.request.query;
        console.log(ctx.request.query);
        console.log(parent_id);
        const list = await ctx.service.comment.more({ art_id, parent_id });
        return this.success(list);
    }
}

module.exports = CommentController;
