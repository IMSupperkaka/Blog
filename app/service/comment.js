const Service = require('./base');
const Moment = require('moment');
const lodash = require('lodash');

class CommentService extends Service {
    // 默认不需要提供构造函数。
    // constructor(ctx) {
    //   super(ctx); 如果需要在构造函数做一些处理，一定要有这句话，才能保证后面 `this.ctx`的使用。
    //   // 就可以直接通过 this.ctx 获取 ctx 了
    //   // 还可以直接通过 this.app 获取 app 了
    // }
    async list({ offset, limit, page, pageSize }, { art_id }) {
        let getSqlData = await this.pageData(
            `select u.avatar,u.name userName,c.* from commentator u 
            right join ( select id,create_time publishTime,content,hit_nums hitNums,parent_id,art_id,u_id from comment where status = 1 and parent_id = 0 ) c on u.id = c.u_id 
            where c.art_id = ${art_id} order by create_time DESC LIMIT ?, ?`
        , { offset, limit, page, pageSize });
        getSqlData.data.map(v => {
            v.parent_id = undefined;
            v.art_id = undefined;
            v.u_id = undefined;
        });
        // let getSqlData = await await this.app.mysql.query(sql);
        // // 分组
        // let groupList = lodash.groupBy(getSqlData, (item) => { return item.parent_id });
        // // 处理分层关系
        // // 最后返回数组
        // let retArr = [];
        // getSqlData.map(v => {
        //     let isPush = false;
        //     v.publishTime = Moment(v.publishTime).format('YYYY-MM-DD HH:mm:ss')
        //     if (v.parent_id == 0) {
        //         v.sub = [];
        //         isPush = true;
        //     }
        //     if (!this.dataEmpty(groupList[v.id.toString()])) {
        //         v.sub = groupList[v.id.toString()];
        //     }
        //     // v.id = undefined;
        //     v.parent_id = undefined;
        //     v.art_id = undefined;
        //     v.u_id = undefined;
        //     if (isPush) {
        //         retArr.push(v);
        //     }
        // });
        return getSqlData;
    }

    async more({ art_id, parent_id }) {
        let sql = await this.handleLineBreak(
            `select u.avatar,u.name userName,c.* from commentator u 
            right join ( select id,create_time publishTime,content,hit_nums hitNums,parent_id,art_id,u_id from comment where status = 1 and parent_id = ${parent_id} ) c on u.id = c.u_id 
            where c.art_id = ${art_id} order by create_time DESC`
        );
        let getSqlData = await await this.app.mysql.query(sql);
        getSqlData.map(v => {
            v.parent_id = undefined;
            v.art_id = undefined;
            v.u_id = undefined;
        });
        // // 分组
        // let groupList = lodash.groupBy(getSqlData, (item) => { return item.parent_id });
        // // 处理分层关系
        // // 最后返回数组
        // let retArr = [];
        // getSqlData.map(v => {
        //     let isPush = false;
        //     v.publishTime = Moment(v.publishTime).format('YYYY-MM-DD HH:mm:ss')
        //     if (v.parent_id == 0) {
        //         v.sub = [];
        //         isPush = true;
        //     }
        //     if (!this.dataEmpty(groupList[v.id.toString()])) {
        //         v.sub = groupList[v.id.toString()];
        //     }
        //     // v.id = undefined;
        //     v.parent_id = undefined;
        //     v.art_id = undefined;
        //     v.u_id = undefined;
        //     if (isPush) {
        //         retArr.push(v);
        //     }
        // });
        return getSqlData;
    }
}
module.exports = CommentService;