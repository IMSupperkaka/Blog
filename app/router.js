'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const github = app.passport.authenticate('github', {
    callbackURL: '/api/passport/github/callback'
  });
  // 文章分类
  router.resources('category', '/category', controller.category);
  // 文章列表
  router.resources('article', '/article', controller.article);
  router.get('/passport/github', github);
  router.get('/passport/github/callback', github);
  router.get('/user/getCurrentUser', controller.user.getCurrentUser);
  
  // 获取主评论 分页
  router.get('/comment', controller.comment.list);
  // 获取更多评论
  router.get('/comment/more', controller.comment.more);
};
