const assert = require('assert');

module.exports = app => { 
    // app.passport.verify(async (ctx, user) => { 
    //     assert(user.provider, 'user.provider should exists');
    //     assert(user.id, 'user.id should exists');
    //     // 从数据库中查找用户信息
    //     const auth = await ctx.model.Authorization.findOne({
    //         where: {
    //             user_id: user.id,
    //             provider: user.provider
    //         }
    //     });

    //     const existsUser = await ctx.model.User.findOne({
    //         where: {
    //             id: auth && auth.uid
    //         }
    //     });

    //     if (existsUser) {   
    //         return existsUser;
    //     }
    //     // 调用 service 注册新用户
    //     const newUser = await ctx.service.user.register(user);
    //     return newUser;
    // })

    // // 将用户信息序列化后存进 session 里面，一般需要精简，只保存个别字段
    // app.passport.serializeUser(async (ctx, user) => {
    //     return {
    //         id: user.id,
    //         name: user.name
    //     };
    // });

    // // 反序列化后把用户信息从 session 中取出来，反查数据库拿到完整信息
    // app.passport.deserializeUser(async (ctx, user) => {
    //     return user;
    // });
}