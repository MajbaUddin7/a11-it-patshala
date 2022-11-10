import { Button } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Carousel from '../../../components/Carosual/Carousel';
import ServiceBox from '../../Services/ServiceBox';

const Home = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/home-services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div>
            <Carousel></Carousel>
            <div className="limited-services">
                <h2 className="text-5xl font-semibold my-8">Featured Services</h2>
                <hr className='w-48 mx-auto' />
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto w-11/12'>
                    {
                        services.map(service => <ServiceBox
                            key={service._id}
                            service={service}
                        ></ServiceBox>)
                    }

                </div>
                <div className="my-5">
                    <Link to='/services'><Button color="blue">See All</Button></Link>
                </div>

            </div>

        </div>
    );
};

export default Home;