module.exports = options => {
    return async function (ctx, next) { 
        next();
        // if (ctx.isAuthenticated()) {
        //     next();
        // } else { 
        //     ctx.status = 401;
        // }
    }
}