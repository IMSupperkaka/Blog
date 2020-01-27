'use strict';

module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;

    const User = app.model.define('user', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        name: STRING,
        created_at: DATE,
        updated_at: DATE,
        account: STRING,
        password: STRING
    });

    return User;
};