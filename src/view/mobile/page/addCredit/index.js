import { Button, InputNumber, Form, Input, Radio, Tabs } from 'antd';
import './index.css'
import { AlipayCircleOutlined, WechatOutlined } from '@ant-design/icons';
import { useState } from 'react';
import api from '../../../../service/api.js'
import axios from 'axios';

function AddCredit() {
    const items = [{
        label: '在线充值',
        key: 0
    }, {
        label: '卡号充值',
        key: 1
    }]
    const [curMode, setCurMode] = useState(0);
    const [onlineForm] = Form.useForm();
    const [codeForm] = Form.useForm();
    window.codeForm = codeForm;
    const onChange = (e) => { setCurMode(e) };
    const onlineCharge = () => {
        console.log(onlineForm)
        onlineForm.validateFields().then((data) => {
            console.log(data);
            api.onlineCredit({
                payAmount: data.num.toString(),
                payType: data.way === "aliPay" ? 'alibank' : 'wechat',
                source: 'pc',
                telephone: data.account
            }).then(res => {
                const orderId = res.retData.orderId;
                const apiFunc = data.way === 'aliPay' ? api.callAliPay : api.callWechatPay
                apiFunc(orderId).then(orderRes => {
                    console.log(orderRes);
                    const urlParams = orderRes.retData
                    const url = `https://openapi.alipaydev.com/gateway.do?${urlParams}`
                    const a = document.createElement('a');
                    a.href = url;
                    a.target = "_blank"
                    // a.click();
                    const div = document.createElement('div');
                    div.innerHTML = `
                    <form name="punchout_form" method="post" action="${url}"> </form> <script>document.forms[0].submit();</script>
                    `
                    div.querySelector('form').submit();
                    axios.post(url).then(html => {
                        console.log(html);
                        const id = window.open("", "_blank");
                        id.document.body.innerHTML = "<div></div>";
                        id.document.write(html)
                    })
                    // window.open(url, "_blank");
                })
            })
        })
    }
    const codeCharge = (data) => {
        console.log(data, codeForm.getFieldsValue(['account', 'confirmAccount', 'code']));
    }
    return (
    <div className="add-credit">
        <div className="page-title">在线充值</div>
        <div className="credit-form-wrapper">
            <Tabs items={items} onChange={onChange}>
            </Tabs>
            {
                !curMode ?             
                <Form
                    form={onlineForm}
                    name="onlineForm"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    autoComplete="off">
                    <Form.Item label="充值账户" name="account" rules={[{ required: true, message: '请输入充值账户' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="充值金额" name="num" rules={[{ required: true, message: '请输入充值金额' }]}>
                        <InputNumber min={1} precision={0} step={10} />
                    </Form.Item>
                    <Form.Item label="充值渠道" name="way" rules={[{ required: true, message: '请选择充值渠道' }]}>
                        <Radio.Group defaultValue="">
                            <Radio.Button value="aliPay"><AlipayCircleOutlined />支付宝</Radio.Button>
                            <Radio.Button value="wechat"><WechatOutlined />微信</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" onClick={onlineCharge}>充值</Button>
                    </Form.Item>
                </Form> :
                <Form
                    form={codeForm}
                    name="codeForm"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    onFinish={codeCharge}
                    autoComplete="off">
                    <Form.Item label="充值账户" name="account" rules={[{ required: true, message: '请输入充值账户' }]}>
                        <Input onInput={(e) => codeForm.setFieldValue('account', e.target.value)} />
                    </Form.Item>
                    <Form.Item label="确认账户" name="confirmAccount" rules={[{ required: true, message: '请输入充值金额' }]}>
                        <Input onInput={(e) => codeForm.setFieldValue('confirmAccount', e.target.value)} />
                    </Form.Item>
                    <Form.Item label="兑换码" name="code" rules={[{ required: true, message: '请输入兑换码' }]}>
                        <Input onInput={(e) => codeForm.setFieldValue('code', e.target.value)} />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">充值</Button>
                    </Form.Item>
                </Form>
            }

        </div>
    </div>
    )
}

export default AddCredit