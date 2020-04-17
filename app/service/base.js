const Service = require('egg').Service;
class BaseService extends Service {
    // 处理分页数据
    async pageData(sql, { offset, limit, page: currentPage, pageSize }) {
        // 统计字段
        let countField = sql.match(/^select\s+(\S+?)[,| ]/i)[1];
        // 需要替换的字符串
        let needReplaceStr = sql.match(/^select\s(.*?)\sfrom/i)[1];
        // 统计总数的语句
        let countSql = sql.replace(needReplaceStr, `count(${countField}) as nums`).replace(/limit.*?$/i, '');
        // 总条数
        let countData = await this.app.mysql.query(countSql);
        let count = countData[0].nums;
        // 总页数
        let totalPages = Math.ceil(count / limit);
        // 列表数据
        let listData = await this.app.mysql.query(sql, [offset, limit]);
        return {
            count,
            totalPages,
            pageSize,
            currentPage,
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