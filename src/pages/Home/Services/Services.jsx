import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    console.log(services);
    return (
        <div>
            <div className='text-center space-y-2 lg:space-y-3'>
                <h3 className='text-2xl font-bold  text-orange-400'>Service</h3>
                <h2 className='font-bold text-3xl lg:text-5xl'>Our Service Area</h2>
                <p>The majority have suffered alteration in some form, by injected humour, or randomised</p>
                <p>Words which don't look even slightly believable. </p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-3 md:gap-3'>
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;