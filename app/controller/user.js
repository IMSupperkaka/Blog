'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async getCurrentUser() {
    const { ctx } = this;
    ctx.body = ctx.user;
  }
}

module.exports = UserController;
