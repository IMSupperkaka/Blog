/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = exports = {};

    config.security = {
        csrf: {
            enable: false,
        }
    }

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1580030684794_9809';

    // add your middleware config here
    // config.middleware = ['passport'];

    config.passportGithub = {
        key: '898bd94a8fb15261d79e',
        secret: 'c2f1a41bbe4feeab47164198ba3debe54fdeb800',
        proxy: true,
    };

    // config.sequelize = {
    //   dialect: 'mysql',
    //   host: '118.31.184.240',
    //   port: 3306,
    //   database: 'bg_test',
    //   username: 'root',
    //   password: '3wHNY2Bq',
    // };

    config.mysql = {
        // 单数据库信息配置
        client: {
            // host
            host: '118.31.184.240',
            // 端口号
            port: '3306',
            // 用户名
            user: 'root',
            // 密码
            password: '3wHNY2Bq',
            // 数据库名
            database: 'bg_test',
            // debug: true,
        },
        // 是否加载到 app 上，默认开启
        app: true,
        // 是否加载到 agent 上，默认关闭
        agent: false,
    }

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };

    const passportConfig = {
        passport: {
            ignore: '/passport'
        }
    }

    config.qiniu = {
        accessKey: '0zn3jrk5z_zEVz-8rhAItN4NhA0kxaVvXKzhizxL',
        secretKey: 'Qn1ruQaPNwwaXMDBTSyhSYUcWeTywmTn8f4SNmcn'
    }

    return {
        ...config,
        ...userConfig,
        ...passportConfig
    };
};
