const Service = require('egg').Service;

class CategoryService extends Service {
    async list() {
        return this.app.mysql.select('category', {
            where: { status: 1 },
            columns: ['name'],
            orders: [['sort', 'asc']]
        })
    }
}

module.exports = CategoryService;
