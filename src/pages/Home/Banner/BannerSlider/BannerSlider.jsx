import React from 'react';

const BannerSlider = (props) => {
    console.log(props);
    const slider = props.slider;
    const { id, img } = slider;
    return (
        <>
            <div id={id} className="carousel-item relative w-full">
                <img src={img} className="w-full rounded-lg" />
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
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
        </>
    );
};

export default BannerSlider;