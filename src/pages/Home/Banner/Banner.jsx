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
                {/* {
                    sliders.map(slider => <BannerSlider
                        key={slider.id}
                        slider={slider}
                    ></BannerSlider>)
                } */}
                <div id='slide1' className="carousel-item relative w-full">
                    <img src={img1} className="w-full rounded-lg" />
                    <div className="absolute h-full flex items-center  left-0 right-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-8 '>
                            <h2 className='text-6xl font-bold'>
                                Affordable <br />
                                Price For Car <br />
                                Servicing</h2>
                            <p className='text-2xl'>
                                There are many variations of passages of  available, but
                                <br />
                                the majority have suffered alteration in some form
                            </p>
                            <div>
                                <button className="btn btn-warning mr-5">Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Project</button>
                            </div>
                            <div className=''>
                                <a href="#slide6" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='slide2' className="carousel-item relative w-full">
                    <img src={img2} className="w-full rounded-lg" />
                    <div className="absolute h-full flex items-center  left-0 right-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-8 '>
                            <h2 className='text-6xl font-bold'>
                                Affordable <br />
                                Price For Car <br />
                                Servicing</h2>
                            <p className='text-2xl'>
                                There are many variations of passages of  available, but
                                <br />
                                the majority have suffered alteration in some form
                            </p>
                            <div>
                                <button className="btn btn-warning mr-5">Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Project</button>
                            </div>
                            <div className=''>
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='slide3' className="carousel-item relative w-full">
                    <img src={img3} className="w-full rounded-lg" />
                    <div className="absolute h-full flex items-center  left-0 right-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-8 '>
                            <h2 className='text-6xl font-bold'>
                                Affordable <br />
                                Price For Car <br />
                                Servicing</h2>
                            <p className='text-2xl'>
                                There are many variations of passages of  available, but
                                <br />
                                the majority have suffered alteration in some form
                            </p>
                            <div>
                                <button className="btn btn-warning mr-5">Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Project</button>
                            </div>
                            <div className=''>
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='slide4' className="carousel-item relative w-full">
                    <img src={img4} className="w-full rounded-lg" />
                    <div className="absolute h-full flex items-center  left-0 right-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-8 '>
                            <h2 className='text-6xl font-bold'>
                                Affordable <br />
                                Price For Car <br />
                                Servicing</h2>
                            <p className='text-2xl'>
                                There are many variations of passages of  available, but
                                <br />
                                the majority have suffered alteration in some form
                            </p>
                            <div>
                                <button className="btn btn-warning mr-5">Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Project</button>
                            </div>
                            <div className=''>
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide5" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='slide5' className="carousel-item relative w-full">
                    <img src={img5} className="w-full rounded-lg" />
                    <div className="absolute h-full flex items-center  left-0 right-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-8 '>
                            <h2 className='text-6xl font-bold'>
                                Affordable <br />
                                Price For Car <br />
                                Servicing</h2>
                            <p className='text-2xl'>
                                There are many variations of passages of  available, but
                                <br />
                                the majority have suffered alteration in some form
                            </p>
                            <div>
                                <button className="btn btn-warning mr-5">Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Project</button>
                            </div>
                            <div className=''>
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide6" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='slide6' className="carousel-item relative w-full">
                    <img src={img6} className="w-full rounded-lg" />
                    <div className="absolute h-full flex items-center  left-0 right-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-8 '>
                            <h2 className='text-6xl font-bold'>
                                Affordable <br />
                                Price For Car <br />
                                Servicing</h2>
                            <p className='text-2xl'>
                                There are many variations of passages of  available, but
                                <br />
                                the majority have suffered alteration in some form
                            </p>
                            <div>
                                <button className="btn btn-warning mr-5">Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Project</button>
                            </div>
                            <div className=''>
                                <a href="#slide5" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Banner;