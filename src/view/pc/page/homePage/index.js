import { Carousel, Button } from 'antd';
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
import './index.css'

function HomePage() {
    return (
    <div className="home-page">
        <div className="carousel-wrapper">
            <Carousel autoplay>
                <div className='banner banner1'>
                    banner1
                </div>
                <div className='banner banner2'>
                    banner2
                </div>
                <div className='banner banner3'>
                    banner3
                </div>
                <div className='banner banner4'>
                    banner4
                </div>
            </Carousel>
        </div>
        <div className='app-content'>

        </div>
        <div className='download'>
            <Button size='large' type="primary" shape="round" icon={<AndroidOutlined />}>下载</Button>
            <Button size='large' type="primary" shape="round" icon={<AppleOutlined />}>下载</Button>
        </div>
    </div>)
}

export default HomePage