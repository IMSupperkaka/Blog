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
  app.router.get('/user/getCurrentUser', app.controller.user.getCurrentUser);
};
