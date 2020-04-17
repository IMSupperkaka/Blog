const Service = require('./base');

class ArticleService extends Service {
    // 默认不需要提供构造函数。
    // constructor(ctx) {
    //   super(ctx); 如果需要在构造函数做一些处理，一定要有这句话，才能保证后面 `this.ctx`的使用。
    //   // 就可以直接通过 this.ctx 获取 ctx 了
    //   // 还可以直接通过 this.app 获取 app 了
    // }
    async list({ offset, limit, page, pageSize }) {
        return this.pageData(this.handleLineBreak(
            `SELECT a.id,a.title,b.name categoryName,a.content,a.hit_nums hitNums,a.create_time publishTime,u.name authorName FROM category as b
            right join (select id,title,content,hit_nums,create_time,c_id,author_id from article) as a on a.c_id = b.id 
            left join (select id,name from users) as u on a.author_id = u.id
            WHERE status = 1 ORDER BY sort ASC LIMIT ?, ?`
        ), { offset, limit, page, pageSize });
    }
}
module.exports = ArticleService;