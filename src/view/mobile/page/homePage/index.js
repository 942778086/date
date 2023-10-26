import ReactFullpage from '@fullpage/react-fullpage';
import { Carousel, Button } from 'antd';
import './index.css'
import logo from '../../../../assets/img/logo.jpg'
import androidQrcode from '../../../../assets/img/qrcode.png'
import iosQrcode from '../../../../assets/img/qrcode.png'
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
import { Divider } from 'antd';
import DefaultAppExample from '../../../../assets/img/app-exam1.png'
import { useState } from 'react';

function HomePage() {
    const height = window.innerHeight;
    let appExam;
    const style = {
        height: height - 30 + 'px'
    }
    const goDownload = (isIos) => {
        window.open(isIos ? "https://www.pgyer.com/d3GcAo" : 'https://www.pgyer.com/ebY8sK', '_blank')
    }
    return (<div className='home-page'>
        <ReactFullpage
            render={({ state, fullpageApi }) => {
                return (
                  <ReactFullpage.Wrapper>
                    <div className="section">
                        <div className='page1' style={style}>
                            <div className='carousel-wrapper'>
                                <Carousel>
                                    <div className='banner banner1'>
                                    </div>
                                    <div className='banner banner2'>
                                    </div>
                                    <div className='banner banner3'>
                                    </div>
                                </Carousel>
                            </div>
                            <div className='desc-wrapper'>
                                <div className='desc-room'>
                                    <div className='desc-label'>有缘千里来相会</div>
                                </div>
                            </div>
                            <div className='download-tip'>
                                <img className='download-logo' src={logo} alt=''></img>
                                <div className='download-tip-label'>
                                    <div className='download-title'>缘宝嘉缘APP软件下载</div>
                                    <div className='download-sub-tip'>嘉园之旅迎向幸福</div>
                                </div>
                            </div>
                            <div className='download-area'>
                                <div className='download-android'>
                                    <Button size='large' type="primary" onClick={() => goDownload(false)} shape="round" icon={<AndroidOutlined />}>下载</Button>
                                    <img className='download-qrcode' src="https://www.pgyer.com/app/qrcode/ebY8sK" alt=''/>
                                </div>
                                <Divider type="vertical" />
                                <div className='download-ios'>
                                    <Button size='large' type="primary" onClick={() => goDownload(true)} shape="round" icon={<AppleOutlined />}>下载</Button>
                                    <img className='download-qrcode' src="https://www.pgyer.com/app/qrcode/d3GcAo" alt=''/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section">
                        <div className='page2' style={style}>
                            <div className='page2-header'>
                                <img className='logo' src={logo} alt=""/>
                                <div className='page2-title'>有缘千里来相会</div>
                            </div>
                            <div className='page2-label'>
                                <p>才情交友私密空间，</p>
                                <p>元宇宙约会空间，</p>
                                <p>缘宝嘉缘来看一看，</p>
                                <p>满满幸福感。</p>
                            </div>
                            <div className='app-exam'>
                                <img className='app-content' src={appExam || DefaultAppExample}></img>
                            </div>
                            <div className='man-dec'></div>
                        </div>
                    </div>
                  </ReactFullpage.Wrapper>
                );
              }}>
        </ReactFullpage>
    </div>)
}

export default HomePage