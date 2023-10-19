import './index.css'
import { Tabs, FloatButton } from 'antd';
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from 'react';
import HomePage from '../page/homePage';
import News from "../page/news";
import AddCredit from "../page/addCredit";
import AboutUs from "../page/aboutUs";
import ConcatUs from "../page/concatUs";
import qrcode from '../../../assets/img/wechatQrcode.jpg'

function MobileLayout() {

    const path = useState('/HomePage')
    const jump = useNavigate();
    const menus = [
        { label: '首页', key: '/HomePage' },
        { label: '新闻动态', key: '/News' },
        { label: '在线充值', key: '/AddCredit' },
        { label: '关于我们', key: '/AboutUs' },
        { label: '联系我们', key: '/ConcatUs' }
    ]
    const createMeta = () => {
        const meta = document.createElement('meta');
        meta.setAttribute('name', 'viewport');
        meta.setAttribute('content', 'maximum-scale=1.0,minimum-scale=1.0,user-scalable=0,width=device-width,initial-scale=1.0');
        document.head.appendChild(meta);
    }
    const onMenuChange = (path) => {
        jump(path)
    }
    createMeta();
    return (
        <div className="mobile-layout">
            <div className="header">
                <div className='logo-name'>
                    <span className='company-name'>缘宝嘉缘</span>
                </div>
                <div className='menu-wrapper'>
                    <Tabs defaultActiveKey="1" items={menus} onChange={onMenuChange} />
                </div>
            </div>
            <div className="body">
                <Routes>
                    <Route path='/' element={<HomePage/>}></Route>
                    <Route path='/HomePage' element={<HomePage/>}></Route>
                    <Route path='/News' element={<News/>}></Route>
                    <Route path='/AddCredit' element={<AddCredit/>}></Route>
                    <Route path='/AboutUs' element={<AboutUs/>}></Route>
                    <Route path='/ConcatUs' element={<ConcatUs/>}></Route>
                </Routes>
                <FloatButton description="微信公众号" icon={<img className='wechat-qrcode' src={qrcode} />}></FloatButton>
            </div>
            <div className='footer'>
                鄂ICP备2023009541
            </div>
        </div>
    )
}

export default MobileLayout;