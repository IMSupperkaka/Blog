const { Controller } = require('egg');
class BaseController extends Controller {

    success(data) {
        this.ctx.set({
            'Content-Type': 'application/json'
        });
        this.ctx.status = 200;
        this.ctx.body = {
            success: true,
            data,
        };
    }

    notFound(msg) {
        msg = msg || 'not found';
        this.ctx.throw(404, msg);
    }
}

module.exports = BaseController;