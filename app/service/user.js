const Service = require('egg').Service;
const moment = require('moment');

class UserService extends Service {
    async register(userInfo) {
        const { ctx } = this;
        const now = moment().format('YYYY-MM-DD HH:MM:SS');
        const user = await ctx.model.User.create({
            name: userInfo.name,
            account: userInfo.name,
            password: userInfo.name,
            created_at: now,
            updated_at: now
        });
        const authorization = await ctx.model.Authorization.create({
            user_id: userInfo.id,
            uid: user.id,
            provider: userInfo.provider,
            created_at: now,
            updated_at: now
        });
        return user;
    }

    async getUserByPK(id) { 
        const { ctx } = this;
        return await ctx.model.User.findByPk(id);
    }
}

module.exports = UserService;