module.exports = () => {
    return async function notFoundHandler(ctx, next) {
        await next();
        console.log(ctx.status);
        console.log(ctx.body);
        if (ctx.status === 404 && !ctx.body) {
            if (ctx.acceptJSON) {
                ctx.body = { error: 'Not Found' };
            } else {
                ctx.body = '<h1>Page Not Found</h1>';
            }
        }
    };
};