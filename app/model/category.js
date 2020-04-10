'use strict';

module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;

    const Category = app.model.define('category', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        name: STRING,
        status: INTEGER,
        sort: INTEGER,
        create_time: DATE,
        update_time: DATE
    });

    return Category;
};