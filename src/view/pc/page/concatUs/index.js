import './index.css'
import { Form } from 'antd';
import { useEffect } from 'react';

function ConcatUs() {
    useEffect(() => {
        // eslint-disable-next-line no-undef
        new AMap.Map('gismap', {
            center: [114.235689, 30.622048],
            zoom: 17,
        });
    }, [])
    return (
    <div className="find-us">
        <div className="page-title">联系我们</div>
        <div className="find-us-content">
            <Form name="basic" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} style={{ maxWidth: 600 }}>
            <Form.Item label="电话号码">
                    027-83338637
                </Form.Item>
                <Form.Item label="联系邮箱">
                    BD@hoxyuanpin.top
                </Form.Item>
                <Form.Item label="客服邮箱">
                    CS@hoxyuanpin.top
                </Form.Item>
                <Form.Item label="地址">
                    湖北省武汉市江汉区红T时尚创意街区6栋803
                </Form.Item>
            </Form>
            <div id='gismap'>
            </div>
        </div>
    </div>)
}

export default ConcatUs