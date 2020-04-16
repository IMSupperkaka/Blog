const Service = require('egg').Service;
class BaseService extends Service {
    handleLineBreak(str) {
        let a = str.replace(/[\n|\r\n|\r\t]/g, '').replace(/\s{2,}/g, " ");
        return a;
    }
}
module.exports = BaseService;