'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const github = app.passport.authenticate('github', {
    callbackURL: '/api/passport/github/callback'
  });
  router.get('/passport/github', github);
  router.get('/passport/github/callback', github);
  router.get('/user/getCurrentUser', controller.user.getCurrentUser);
  // 文章分类
  router.get('/category', controller.category.getCategory);
  // 文章列表 分页
  router.get('/article', controller.article.list);
  // 文章详情
  router.get('/article/:id', controller.article.detail);
  // 获取主评论 分页
  router.get('/comment', controller.comment.list);
  // 获取更多评论
  router.get('/comment/more', controller.comment.more);
};
