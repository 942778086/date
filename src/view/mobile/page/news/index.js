import './index.css'
import { Radio, Tag, Empty, Pagination } from 'antd';
import { useEffect } from 'react';
import { useState } from 'react';
import api from '../../../../service/api.js'
import {LeftCircleOutlined} from '@ant-design/icons'

function News() {
    const [list, setList] = useState([]);
    const colorMap = {
        ZH: {
            color: '#00000005',
            title: '综合'
        },
        XW: {
            color: '#108ee9',
            title: '新闻'
        },
        GG: {
            color: '#2db7f5',
            title: '公告'
        },
        HD: {
            color: '#87d068',
            title: '活动'
        }
    }
    const [count, setCount] = useState(0);
    const [curType, setCurType] = useState('ZH');
    const [curPage, setCurPage] = useState(1);
    const [curNews, setCurNews] = useState({});
    const [newsDetil, setNewsDetail] = useState('');
    /** @type { 'list' | 'detail' } */
    const [mode, setMode] = useState('list');
    const fetchList = () => {
        setTimeout(() => {
            api.getNewsList(curType, curPage).then((list, count) => {
                setList(list);
                setCount(count);
            })
        }, 10)
    }
    const onRadioChange = (e) => {
        setCurPage(1);
        setCurType(e.target.value);
    }
    const jumpPage = (page) => {
        setCurPage(page);
    }
    const checkNewsDetail = (news) => {
        setMode('detail');
        setCurNews(news);
        const newsId = news.newsSeq;
        api.getNewsDetail(newsId).then(data => {
            setNewsDetail(data.retData);
        })
    }
    const back = () => {
        setMode('list');
    }

    useEffect(() => {
        fetchList()
    }, []);
    useEffect(() => {
        fetchList()
    }, [curType, curPage]);

    return (
        <>
            <div className="news">
                <div className='page-title'>新闻动态</div>
                {
                    mode === 'list' ?
                    <div className='news-table'>
                        <div className="news-menu">
                            <Radio.Group onChange={onRadioChange}>
                                <Radio value='ZH'><Tag>综合</Tag></Radio>
                                <Radio value='XW'><Tag color="#108ee9">新闻</Tag></Radio>
                                <Radio value='GG'><Tag color="#2db7f5">公告</Tag></Radio>
                                <Radio value='HD'><Tag color="#87d068">活动</Tag></Radio>
                            </Radio.Group>
                        </div>
                        <div className="news-list">
                            {
                                list.length ? list.map(item => {
                                    return (
                                    <div className='news-item' onClick={() => checkNewsDetail(item)}>
                                        <div className='news-tag'>
                                            <Tag className={item.newsType} color={colorMap[item.newsType].color}>{colorMap[item.newsType].title}</Tag>
                                        </div>
                                        <div className='news-title'>{ item.newsTitle }</div>
                                    </div>)
                                }) : <Empty description={<span>暂无数据</span>}/>
                            }
                        </div>
                        {
                            list.length ? <Pagination defaultCurrent={1} total={count} onChange={jumpPage} /> : <></>
                        }
                    </div> :
                    <div className='news-detail'>
                        <div className='news-detail-title'>
                            <div className='news-detail-back' onClick={back}>
                                <LeftCircleOutlined />返回
                            </div>
                            { curNews.newsTitle }
                        </div>
                        <div className='news-detail-content'>{newsDetil.newsContent}</div>
                    </div>
                }

            </div>
        </>
    )
}

export default News