import { Button, InputNumber, Form, Input, Radio } from 'antd';
import './index.css'
import { AlipayCircleOutlined, WechatOutlined } from '@ant-design/icons';

function AddCredit() {
    return (
    <div className="add-credit">
        <div className="page-title">在线充值</div>
        <div className="credit-form-wrapper">
            <Form
                name="basic"
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
                <Form.Item label="充值渠道" name="way">
                    <Radio.Group defaultValue="aliPay">
                        <Radio.Button value="aliPay"><AlipayCircleOutlined />支付宝</Radio.Button>
                        <Radio.Button value="wechat"><WechatOutlined />微信</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">充值</Button>
                </Form.Item>
            </Form>
        </div>
    </div>
    )
}

export default AddCredit