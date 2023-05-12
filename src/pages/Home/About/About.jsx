import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';
const About = () => {
    return (
        <div className="hero min-h-screen lg:h-[527px] lg:mb-24 mt-3">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 h-full rounded-lg shadow-2xl" />                
                    <img src={parts} className="w-1/2 absolute right-3 top-1/2 h-full rounded-lg shadow-2xl border-8 border-white" />                
                </div>

                <div className='lg:w-1/2 mt-24 space-y-5 p-4'>
                    <h3 className='text-orange-400 font-bold text-2xl'>About Us</h3>
                    <h1 className="lg:text-5xl text-3xl font-bold">
                        We are qualified & of experience in this field
                    </h1>
                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                    </p>
                    <p>
                        the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                    </p>
                    <button className="btn btn-primary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;