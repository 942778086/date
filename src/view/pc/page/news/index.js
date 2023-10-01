import './index.css'
import { Radio, Tag } from 'antd';
import { useState } from 'react';

function News() {
    const [list] = useState([{
        title: 'xxxxxxxxxxxx',
        tag: 'news'
    }, {
        title: 'xxxxxxxxxxxxxx',
        tag: 'ano'
    }, {
        title: 'xxxxxxxxxxxxxxxxx',
        tag: 'active'
    }]);
    const colorMap = {
        news: {
            color: '#108ee9',
            title: '新闻'
        },
        ano: {
            color: '#2db7f5',
            title: '公告'
        },
        active: {
            color: '#87d068',
            title: '活动'
        }
    }
    const onRadioChange = (e) => {
        console.log(e);
    }
    return (
        <>
            <div className='page-title'>新闻动态</div>
                <div className="news">
                    <div className="news-menu">
                    <Radio.Group onChange={onRadioChange}>
                        <Radio value={1}><Tag>综合</Tag></Radio>
                        <Radio value={2}><Tag color="#108ee9">新闻</Tag></Radio>
                        <Radio value={3}><Tag color="#2db7f5">公告</Tag></Radio>
                        <Radio value={4}><Tag color="#87d068">活动</Tag></Radio>
                        </Radio.Group>
                    </div>
                    <div className="news-list">
                        {
                            list.map(item => {
                                return (
                                <div className='news-item'>
                                    <div className='news-tag'>
                                        <Tag color={colorMap[item.tag].color}>{colorMap[item.tag].title}</Tag>
                                    </div>
                                    <div className='news-title'>{ item.title }</div>
                                </div>)
                            })
                        }
                    </div>
            </div>
        </>
    )
}

export default News