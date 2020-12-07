const qiniu = require('qiniu');
const Controller = require('../../base');

class Qiniu extends Controller {

    async check() {
        const { ctx } = this;
        const { userImageList } = ctx.request.body;
        const requestList = userImageList.map((v, index) => {
            const req = async () => {
                const response = await ctx.curl(v.synthesisImage);

                if (response.status == 400) { // 持久化
                    return {
                        status: response.status,
                        index: index,
                        synthesisImage: v.synthesisImage
                    }
                }

                return {
                    status: response.status,
                    index: index,
                    synthesisImage: v.synthesisImage
                }
            }
            return req();
        })
        const errorList = (await Promise.all(requestList)).filter((v) => {
            return v.status != 200;
        })
        this.success({
            errorList: errorList
        })
    }

    // 创建持久化资源
    async create() {
        const { ctx } = this;
        const { accessKey, secretKey } = this.config.qiniu;
        const { srcKey, fops } = ctx.request.body;
        const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
        let config = new qiniu.conf.Config();
        config.zone = qiniu.zone.Zone_z0;
        const operManager = new qiniu.fop.OperationManager(mac, config);
        //处理指令集合
        const pipeline = 'wow_print';
        const srcBucket = 'xddd';
        const options = {
            'notifyURL': 'http://api.example.com/pfop/callback',
            'force': false,
        };
        //持久化数据处理返回的是任务的persistentId，可以根据这个id查询处理状态
        const response = await new Promise((resolve, reject) => {
            operManager.pfop(srcBucket, srcKey, fops, pipeline, options, (err, respBody, respInfo) => {
                if (err) {
                    throw err;
                }
                resolve({
                    statusCode: respInfo.statusCode,
                    respInfo: respInfo,
                    respBody: respBody
                })
            });
        })
        if (response.statusCode == 200) {
            this.success({
                persistentId: response.respBody.persistentId
            })
        } else {
            this.fail({
                status: response.statusCode,
                errmsg: response.respBody
            })
        }
    }

    // 根据id查询持久化进度
    async show() {
        const { ctx } = this;
        const { id } = ctx.params;
        const config = new qiniu.conf.Config();
        const operManager = new qiniu.fop.OperationManager(null, config);

        const response = await new Promise((resolve, reject) => {
            operManager.prefop(id, function (err, respBody, respInfo) {
                if (err) {
                    throw err;
                }
                resolve({
                    statusCode: respInfo.statusCode,
                    respInfo: respInfo,
                    respBody: respBody
                })
            });
        })

        if (response.statusCode == 200) {
            this.success(response.respBody);
        } else {
            this.fail({
                status: response.statusCode,
                errmsg: response.respBody
            });
        }
    }

}

module.exports = Qiniu;
