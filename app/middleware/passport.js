module.exports = options => {
    return async function (ctx, next) { 
        // if (ctx.isAuthenticated()) {
            next();
        // } else { 
            // ctx.status = 401;
        // }
    }
}