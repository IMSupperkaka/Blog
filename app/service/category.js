const Service = require('egg').Service;

class categoryService extends Service {
  async find(uid) {
    const user = await this.app.mysql.get('users', { id: 13 });
    console.log(user)
    return user;
  }
}

module.exports = categoryService;