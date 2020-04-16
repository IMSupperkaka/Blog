const Service = require('egg').Service;
class BaseService extends Service {
    // 处理分页数据
    async pageData(countSql, countField, sql, { offset, limit, page, pageSize }) {
        // 总条数
        let countData = await this.app.mysql.query(countSql);
        let count = countData[0][countField]
        // 总页数
        let totalPages = Math.ceil(count / limit);
        // 列表数据
        let listData = await this.app.mysql.query(sql, [offset, limit]);
        return {
            count,
            totalPages,
            pageSize,
            currentPage: page,
            data: listData
        }
    }
    // 处理空格等
    handleLineBreak(str) {
        let a = str.replace(/[\n|\r\n|\r\t]/g, '').replace(/\s{2,}/g, " ");
        return a;
    }
}
module.exports = BaseService;