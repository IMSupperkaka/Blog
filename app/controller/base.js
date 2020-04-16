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

    // 页码控制
    pageConfig(page = 1, limit = 10) {
        page = Number(page);
        limit = Number(limit);
        let offset = page * limit - limit;
        return { offset, limit, page, pageSize: limit };
    }

    notFound(msg) {
        msg = msg || 'not found';
        this.ctx.throw(404, msg);
    }
}

module.exports = BaseController;