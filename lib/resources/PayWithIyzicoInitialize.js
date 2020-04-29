'use strict';

var IyzipayResource = require('../IyzipayResource');

function PayWithIyzicoInitialize() {
    this._config = arguments[0];
    this._api = {
        create: {
            path: '/payment/pay-with-iyzico/initialize',
            method: 'POST',
            requestModel: 'CreatePayWithIyzicoInitializeRequest'
        }
    };
}

PayWithIyzicoInitialize.prototype = new IyzipayResource();

module.exports = PayWithIyzicoInitialize;