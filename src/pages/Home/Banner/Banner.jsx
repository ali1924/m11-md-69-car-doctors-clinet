import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import img5 from '../../../assets/images/banner/5.jpg';
import img6 from '../../../assets/images/banner/6.jpg';
import BannerSlider from './BannerSlider/BannerSlider';
const Banner = () => {
    const sliders = [
        { id: 'slide1', img: img1 },
        { id: 'slide2', img: img2 },
        { id: 'slide3', img: img3 },
        { id: 'slide4', img: img4 },
        { id: 'slide5', img: img5 },
        { id: 'slide6', img: img6 },
    ]
    // console.log(slider);
    return (
        <div>
            <div className="carousel w-full h-[600px]">
                {
                    sliders.map(slider => <BannerSlider
                        key={slider.id}
                        slider={slider}
                    ></BannerSlider>)
                }
            </div>
        </div>
    );
};
export default Banner;