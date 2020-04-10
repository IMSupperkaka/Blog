const Service = require('egg').Service;

class CategoryService extends Service {
  async find(uid) {
    const user = await this.app.mysql.get('users', { id: 13 });
    console.log(user)
    return { user };
  }
}

module.exports = CategoryService;