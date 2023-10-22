import './layout.css'
import logo from '../../../assets/img/logo.jpg'
import { Tabs, FloatButton } from 'antd';
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from 'react';
import HomePage from '../page/homePage';
import News from "../page/news";
import AddCredit from "../page/addCredit";
import AboutUs from "../page/aboutUs";
import ConcatUs from "../page/concatUs";
import qrcode from '../../../assets/img/wechatQrcode.jpg'

function PCLayout() {

    const path = useState('/HomePage')
    const jump = useNavigate();
    const menus = [
        { label: '首页', key: '/HomePage' },
        { label: '新闻动态', key: '/News' },
        { label: '在线充值', key: '/AddCredit' },
        { label: '关于我们', key: '/AboutUs' },
        { label: '联系我们', key: '/ConcatUs' }
    ]

    const onMenuChange = (path) => {
        jump(path)
    }
    return (
        <div className="pc-layout">
            <div className="header">
                <div className='logo-name'>
                    <img className='logo' src={logo} alt=""/>
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
            </div>
            <div className='footer'>
                鄂ICP备2023009541号-3
            </div>
            <FloatButton description="微信公众号" icon={<img src={qrcode} />}>
            </FloatButton>
        </div>
    )
}

export default PCLayout;