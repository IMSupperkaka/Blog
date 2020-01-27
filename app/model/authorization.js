module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;

    const Authorization = app.model.define('authorization', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        uid: INTEGER,
        user_id: INTEGER,
        provider: STRING(255),
        created_at: DATE,
        updated_at: DATE
    }, {
        freezeTableName: true
    });

    return Authorization;
};