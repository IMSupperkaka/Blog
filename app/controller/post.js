'use strict';

const Controller = require('egg').Controller;

class PostController extends Controller {
  async getPostList() {
    const { ctx } = this;
    ctx.body = ctx.user;
  }
}

module.exports = PostController;
