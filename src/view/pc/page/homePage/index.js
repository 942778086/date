import { Carousel, Button } from 'antd';
import { AndroidFilled, AppleFilled } from '@ant-design/icons';
import './index.css'
import qrcode from '../../../../assets/img/qrcode.png'

function HomePage() {
    const goDownload = (isIos) => {
        window.open(isIos ? "https://www.pgyer.com/d3GcAo" : 'https://www.pgyer.com/ebY8sK', '_blank')
    }
    return (
    <div className="home-page">
        <div className="carousel-wrapper">
            <Carousel autoplay>
                <div className='banner banner1'>
                </div>
                <div className='banner banner2'>
                </div>
                <div className='banner banner3'>
                </div>
                <div className='banner banner4'>
                </div>
            </Carousel>
        </div>
        <div className='app-content'>
            <div className='download-area'>
                <div className='android-download'>
                    <img className='download-img' src="https://www.pgyer.com/app/qrcode/ebY8sK"></img>
                    <Button className='download-btn' size='large' onClick={() => goDownload(false)} type="primary" shape="round" icon={<AndroidFilled />}>下载</Button>
                </div>
                <div className='ios-download'>
                    <img className='download-img' src="https://www.pgyer.com/app/qrcode/d3GcAo"></img>
                    <Button className='download-btn' size='large' onClick={() => goDownload(true)} type="primary" shape="round" icon={<AppleFilled />}>下载</Button>
                </div>
            </div>
            <div className='app-detail'>
                <p>有缘千里来相会</p>
                <p>分享生活</p>
                <p>遇到志趣相投的TA</p>
            </div>
        </div>

    </div>)
}

export default HomePage