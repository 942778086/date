import axios from "./axios"
import crypto from 'crypto-js'
import JSEncrypt from 'jsencrypt';
import { KJUR, KEYUTIL, RSAKey, X509, b64toutf8, ArrayBuffertohex, hextoArrayBuffer } from 'jsrsasign';

const mgrDomain = 'http://47.92.199.153:8083';
const payDomain = 'http://47.92.199.153:8082'
const privateKey = 'MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAJADDRvrzg3gTXTcCjdS3GseGiry/YAgBf4NFi2XTZCeQlT240TlgxPKJ46kempshSrHQmIJ4JK9wfDTqKl45C44X4H5vMxZppiz+0wTGgo6bo5NizxfraM+UGkZOgoI8qJHLtsRHtypuz9JTzRHa7sZtPNSdvSdavj6n1/A0ZpxAgMBAAECgYA/BHbKDwed3tdGGbuGtgWqAgQlYys208yLfSKFVL4mWHpiP5732Q7grAdfTe4bf91N+N+9kuDolYy2W4hkkHgYbyyxwPAKw1FW5nAVJqUR+c0pbtyxhBqIGAYMCZwXOrI2EHj8Q6zGtjCEC1F+nh5flknkRoy8f8KY8//zUYPVWQJBAOOXIHIHIQnKbTGXpLhvHKdR08+BdqlLkaefNmOpPak/q0e/UDo3jKopKUINzCK8nqYA8MMRZa4vZbY4uBIKPL8CQQCh/RgDWKfWFL7WbzDRpAyGUauxD+SFMk8f1z4+4AGkMJMaFNu6NC+RYuW8geTVvsn/v/wOvGx0hDbjackSyITPAkBLSqbYMlWSuJ4RJvq+bTvMeryYzFqmPTLNglVq+QVGJaMTVE5FRDVL4dwdVxUudLoDbxI3Zlz+F/4NH4x9o1dfAkBNKXRw06BPN96X4qtMkWpt6SVx2HIwiIBsWGmMJcRiY8kOmXT5Q7aM+KEapH1O2+z46Ii2tEatUfWbal6flei9AkEAxUiNkjK+568C+cRd3rZIMURKXGnRlC9a6hPwWgUlnrNZbMmJOX7Rh4iTBJByoMD/2K0xd2AVKtJ5ARf6Y14YqQ==';
const publicKey = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCQAw0b684N4E103Ao3UtxrHhoq8v2AIAX+DRYtl02QnkJU9uNE5YMTyieOpHpqbIUqx0JiCeCSvcHw06ipeOQuOF+B+bzMWaaYs/tMExoKOm6OTYs8X62jPlBpGToKCPKiRy7bER7cqbs/SU80R2u7GbTzUnb0nWr4+p9fwNGacQIDAQAB';

const api = {
    getNewsList: (newsType = 'ZH', pageNum = 1) => {
        return new Promise(resolve => {
            axios.get(`/user/news`, {
                params: {
                    newsType,
                    pageNum,
                    pageSize: 10
                }
            }).then(res => {
                resolve(res.retData, res.retSize);
            })
        });
    },
    getNewsDetail: (newsId) => {
        return new Promise(resolve => {
            axios.get(`/user/news/${newsId}`).then((res) => {
                resolve(res);
            })
        })
    },
    onlineCredit: (data) => {
        return axios.post('/balance/online', data)
    },
    callAliPay: (orderId) => {
        return axios.post(`/pay/bank/ali/pay/${orderId}`)
    },
    callMobileAliPay: (orderId) => {
        return axios.post(`/pay/bank/mbweb/pay/${orderId}`)
    },
    callWechatPay: (orderId) => {
        return axios.post(`/pay/bank/jsapi/${orderId}`)
    },
    codeCredit: (account, code) => {
        return new Promise(resolve => {
            // test1
            const enc = new JSEncrypt();
            enc.setPublicKey(publicKey);
            const pwd = enc.encrypt(code);
            console.log(pwd);

            // test2
            // const keyObj = X509.getPublicKeyFromCertHex(ArrayBuffertohex(hextoArrayBuffer(window.atob(publicKey))), null, 'x509pub');
            // const encPwd = KJUR.crypto.Cipher.encrypt(code, keyObj);
            // console.log(encPwd);

            axios.post('/balance/exchange', {
                cardType: 'card100',
                password: pwd,
                source: 'gzh',
                telephone: account
            }).then(() => {
                resolve();
            })
        })
    }
}

export default api;