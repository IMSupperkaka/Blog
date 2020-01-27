'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  app.passport.mount('github');

  app.router.get('/user/getCurrentUser', app.controller.user.getCurrentUser);
};
