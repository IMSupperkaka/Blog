const Service = require('./base');

const Moment = require('moment');

class ArticleService extends Service {
    // 默认不需要提供构造函数。
    // constructor(ctx) {
    //   super(ctx); 如果需要在构造函数做一些处理，一定要有这句话，才能保证后面 `this.ctx`的使用。
    //   // 就可以直接通过 this.ctx 获取 ctx 了
    //   // 还可以直接通过 this.app 获取 app 了
    // }
    async list({ offset, limit, page, pageSize }, { cId }) {
        let condition = '';
        if (!this.dataEmpty(cId)) {
            condition = ` where b.id = ${cId} `;
        }
        let getSqlData = await this.pageData(
            `SELECT a.id,a.tags,a.title,b.name categoryName,a.content,a.hit_nums hitNums,a.create_time publishTime,a.name authorName,c.nums commentNums FROM category as b 
            right join (
            select ia.*,u.name from users u  
            right join (select id,title,tags,content,hit_nums,create_time,c_id,author_id,sort from article where status = 1) as ia on ia.author_id = u.id
            ) as a on a.c_id = b.id 
            left join (select count(id) as nums, art_id from comment where status = 1) as c on a.id = c.art_id ${condition} ORDER BY a.sort ASC,a.create_time DESC LIMIT ?, ?`
        , { offset, limit, page, pageSize });
        getSqlData.data.map(v => {
            v.content = v.content.length > 100 ? v.content.slice(0,100) + '...' : v.content;
            v.commentNums = v.commentNums || 0;
            v.publishTime = Moment(v.publishTime).format('YYYY-MM-DD HH:mm:ss')
        });
        return getSqlData;
    }

    /**
     * @desc 获取文章 详情
     * @method controller 
     * @param {int} art_id 文章id
     */
    async detail(art_id) {
        if (this.dataEmpty(art_id)) {
            return { errmsg: 'not found', status: 404, errno: 1000 };
        }
        if (!this.positiveInteger(art_id)) {
            return { errmsg: 'params error', status: 200, errno: 1000 };
        }
        // 查询有没有这文章
        let findData = await this.app.mysql.get('article', { id: art_id });
        // 没有查到
        if (this.dataEmpty(findData)) {
            return { errmsg: 'not found', status: 404, errno: 1000 };
        }
        // 查到了文章
        let data = {
            title: findData.title,
            publishTime: Moment(findData.publishTime).format('YYYY-MM-DD HH:mm:ss'),
            content: findData.content
        };
        return { errno: 0, data };
    }
}
module.exports = ArticleService;