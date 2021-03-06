const { Controller } = require('egg');
class BaseController extends Controller {
    // 请求返回数据
    success(data) {
        this.ctx.set({
            'Content-Type': 'application/json'
        });
        this.ctx.status = 200;
        this.ctx.body = {
            errno: 0,
            errmsg: '',
            data,
        };
    }

    // 请求失败返回
    fail({ errmsg, errno, status }) {
        this.ctx.set({
            'Content-Type': 'application/json'
        });
        this.ctx.status = status || 500;
        this.ctx.body = {
            errno: errno || 1000,
            errmsg: errmsg || '',
        };
    }

    // 页码控制
    pageConfig(page = 1, limit = 10) {
        page = Number(page);
        page = isNaN(page) ? 1 : page;
        page = page < 1 ? 1 : page;
        limit = Number(limit);
        limit = isNaN(limit) ? 10 : limit;
        limit = limit < 1 ? 10 : limit;
        let offset = page * limit - limit;
        return { offset, limit, page, pageSize: limit };
    }

    notFound(msg) {
        msg = msg || 'not found';
        this.ctx.throw(404, msg);
    }
}

module.exports = BaseController;