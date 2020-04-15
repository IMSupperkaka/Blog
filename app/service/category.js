const Service = require('egg').Service;
class CategoryService extends Service {
    // 默认不需要提供构造函数。
    // constructor(ctx) {
    //   super(ctx); 如果需要在构造函数做一些处理，一定要有这句话，才能保证后面 `this.ctx`的使用。
    //   // 就可以直接通过 this.ctx 获取 ctx 了
    //   // 还可以直接通过 this.app 获取 app 了
    // }
    async list() {
        // 假如 我们拿到用户 id 从数据库获取用户详细信息
        return this.app.mysql.select('category', { // 搜索 post 表
            where: { status: 1 }, // WHERE 条件
            columns: ['name'], // 要查询的表字段
            orders: [['sort', 'asc']], // 排序方式
            // limit: 10, // 返回数据量
            // offset: 0, // 数据偏移量
        })
    }
}
module.exports = CategoryService;