const crypto = require('crypto');
const https = require('https');
const fetch = require('node-fetch');
require('dotenv').config();

module.exports = {
    createPayment2: async function (amount) {
        //parameters
        const secret =
            process.env.SECRET_KEY || 'amDCa7AnGuvSxpW2ZVgW05atKFmXGFpf';
        const partnerKey = process.env.PARTNER_KEY || 'MOMOGSG620220517';
        const accessKey = process.env.ACCESS_KEY || 'GwOJGeOJhaN4H4u5';
        const requestId = partnerKey + new Date().getTime();
        const orderId = requestId;
        const orderInfo = 'DCE';
        const redirectUrl = 'https://dce2021.ml';
        const ipnUrl = 'https://callback.url/notify';
        // const ipnUrl = redirectUrl = "https://webhook.site/454e7b77-f177-4ece-8236-ddf1c26ba7f8";
        const requestType = 'captureWallet';
        const extraData = ''; //pass empty value if your merchant does not have stores

        //before sign HMAC SHA256 with format
        //accessKey=$accessKey&amount=$amount&extraData=$extraData&ipnUrl=$ipnUrl&orderId=$orderId&orderInfo=$orderInfo&partnerCode=$partnerCode&redirectUrl=$redirectUrl&requestId=$requestId&requestType=$requestType
        const rawSignature =
            'accessKey=' +
            accessKey +
            '&amount=' +
            amount +
            '&extraData=' +
            extraData +
            '&ipnUrl=' +
            ipnUrl +
            '&orderId=' +
            orderId +
            '&orderInfo=' +
            orderInfo +
            '&partnerCode=' +
            partnerKey +
            '&redirectUrl=' +
            redirectUrl +
            '&requestId=' +
            requestId +
            '&requestType=' +
            requestType;
        const signature = crypto
            .createHmac('sha256', `${secret}`)
            .update(rawSignature)
            .digest('hex');
        const requestBody = JSON.stringify({
            partnerCode: partnerKey,
            accessKey: accessKey,
            requestId: requestId,
            amount: amount,
            orderId: requestId,
            orderInfo: orderInfo,
            redirectUrl: redirectUrl,
            ipnUrl: ipnUrl,
            extraData: extraData,
            requestType: requestType,
            signature: signature,
            lang: 'vi',
        });
        const response = await fetch(
            'https://test-payment.momo.vn/v2/gateway/api/create',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': Buffer.byteLength(requestBody),
                },
                body: requestBody,
            },
        );
        return response.json();
    },
    createPayment: async function (amount) {
        //parameters
        const secret = process.env.SECRET_KEY;
        const partnerKey = process.env.PARTNER_KEY || 'MOMOGSG620220517';
        const accessKey = process.env.ACCESS_KEY || 'GwOJGeOJhaN4H4u5';
        const requestId = partnerKey + new Date().getTime();
        const orderId = requestId;
        const orderInfo = 'DCE';
        const redirectUrl = 'https://dce2021.ml';
        const ipnUrl = 'https://callback.url/notify';
        // const ipnUrl = redirectUrl = "https://webhook.site/454e7b77-f177-4ece-8236-ddf1c26ba7f8";
        const requestType = 'captureWallet';
        const extraData = ''; //pass empty value if your merchant does not have stores

        //before sign HMAC SHA256 with format
        //accessKey=$accessKey&amount=$amount&extraData=$extraData&ipnUrl=$ipnUrl&orderId=$orderId&orderInfo=$orderInfo&partnerCode=$partnerCode&redirectUrl=$redirectUrl&requestId=$requestId&requestType=$requestType
        const rawSignature =
            'accessKey=' +
            accessKey +
            '&amount=' +
            amount +
            '&extraData=' +
            extraData +
            '&ipnUrl=' +
            ipnUrl +
            '&orderId=' +
            orderId +
            '&orderInfo=' +
            orderInfo +
            '&partnerCode=' +
            partnerKey +
            '&redirectUrl=' +
            redirectUrl +
            '&requestId=' +
            requestId +
            '&requestType=' +
            requestType;
        //puts raw signature
        // console.log('--------------------RAW SIGNATURE----------------');
        // console.log(rawSignature);
        //signature
        const signature = crypto
            .createHmac('sha256', `${secret}`)
            .update(rawSignature)
            .digest('hex');
        // console.log('--------------------SIGNATURE----------------');
        // console.log(signature);

        //json object send to MoMo endpoint
        const requestBody = JSON.stringify({
            partnerCode: partnerKey,
            accessKey: accessKey,
            requestId: requestId,
            amount: amount,
            orderId: requestId,
            orderInfo: orderInfo,
            redirectUrl: redirectUrl,
            ipnUrl: ipnUrl,
            extraData: extraData,
            requestType: requestType,
            signature: signature,
            lang: 'vi',
        });
        //Create the HTTPS objects
        const options = {
            hostname: 'test-payment.momo.vn',
            port: 443,
            path: '/v2/gateway/api/create',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(requestBody),
            },
        };
        //Send the request and get the response
        const req = https.request(options, (res) => {
            // console.log(`Status: ${res.statusCode}`);
            // console.log(`Headers: ${JSON.stringify(res.headers)}`);
            res.setEncoding('utf8');
            res.on('data', (body) => {
                console.log('Body: ');
                console.log(body);
                console.log('payUrl: ');
                console.log(JSON.parse(body).payUrl);
                return body;
            });
            res.on('end', () => {
                // console.log('No more data in response.');
            });
        });

        req.on('error', (e) => {
            // console.log(`problem with request: ${e.message}`);
        });
        // write data to request body
        // console.log('Sending....');
        req.write(requestBody);
        req.end();
    },
};
