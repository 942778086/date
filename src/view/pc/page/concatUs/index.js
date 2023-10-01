import './index.css'
import { Form } from 'antd';
import { useEffect } from 'react';

function ConcatUs() {
    useEffect(() => {
        // eslint-disable-next-line no-undef
        new AMap.Map('gismap',{
            zoom: 5,
        });
    })
    return (
    <div className="find-us">
        <div className="page-title">联系我们</div>
        <div className="find-us-content">
            <Form name="basic" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} style={{ maxWidth: 600 }}>
                <Form.Item label="电话号码">
                    138xxxxxxxx
                </Form.Item>
                <Form.Item label="邮箱">
                    138xxxxxxxx
                </Form.Item>
                <Form.Item label="地址">
                    中国 厦门 环岛东路1699号建发国际大厦
                </Form.Item>
            </Form>
            <div id='gismap'>
            </div>
        </div>
    </div>)
}

export default ConcatUs