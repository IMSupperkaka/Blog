const Service = require('./base');

class ArticleService extends Service {
    // 默认不需要提供构造函数。
    // constructor(ctx) {
    //   super(ctx); 如果需要在构造函数做一些处理，一定要有这句话，才能保证后面 `this.ctx`的使用。
    //   // 就可以直接通过 this.ctx 获取 ctx 了
    //   // 还可以直接通过 this.app 获取 app 了
    // }
    async list({ offset, limit }) {
        // 假如 我们拿到用户 id 从数据库获取用户详细信息
        return this.app.mysql.query(this.handleLineBreak(
            `SELECT a.id,a.title,b.name categoryName,a.content,a.hit_nums hitNums,a.create_time publishTime,u.name authorName FROM category as b
            right join (select id,title,content,hit_nums,create_time,c_id,author_id from article) as a on a.c_id = b.id 
            left join (select id,name from users) as u on a.author_id = u.id
            WHERE status = 1 ORDER BY sort ASC LIMIT ?, ?`
        ), [offset, limit]);
        // return this.app.mysql.select('article', { // 搜索 post 表
        //     alias: 'a',
        //     where: { status: 1 }, // WHERE 条件
        //     columns: ['id', 'title', 'content', 'hit_nums', 'create_time'], // 要查询的表字段
        //     join: [
        //         'left join (select id,name from category) as b on a.c_id = b.id'
        //     ],
        //     orders: [['sort', 'asc']], // 排序方式
        //     limit, // 返回数据量
        //     offset, // 数据偏移量
        // })
    }
}
module.exports = ArticleService;