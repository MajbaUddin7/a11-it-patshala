import React, { useEffect, useState } from 'react';
import ServiceBox from './ServiceBox';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        // fetch('https://it-patshala-server.vercel.app/services')
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div>
            <div className='text-center mb-4'>
                <h2 className="text-5xl font-semibold my-8">Explore all services</h2>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto w-11/12'>
                {
                    services.map(service => <ServiceBox
                        key={service._id}
                        service={service}
                    ></ServiceBox>)
                }
            </div>
        </div>
    );
};

export default Services;