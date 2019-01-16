'use strict';

const Controller = require('egg').Controller;

class ApiController extends Controller {
    async some() {
        this.ctx.body = '测试接口2';
    }
}

module.exports = ApiController;
