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
  router.get('/category/getCategory', controller.category.getCategory);
};
