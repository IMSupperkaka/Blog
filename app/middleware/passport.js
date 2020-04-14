module.exports = options => {
    return async function (ctx, next) {
        if (ctx.isAuthenticated()) {
            await next();
        } else { 
            ctx.status = 401;
        }
    }
}