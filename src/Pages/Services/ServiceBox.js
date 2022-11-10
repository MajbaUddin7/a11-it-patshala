import React from 'react';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Card, CardBody, CardFooter, CardHeader, Tooltip, Typography } from '@material-tailwind/react';

const ServiceBox = ({ service }) => {
    const { _id, img, price, title } = service;
    console.log(_id);
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">

            {/* <PhotoProvider>
                <PhotoView src={img}>
                    <img src={img} alt="" />
                </PhotoView>
            </PhotoProvider>
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/services/${_id}`}>
                        <button className="btn btn-dark">View Details</button>
                    </Link>
                </div>
            </div> */}


            <Card className="w-96">
                <CardHeader floated={false} className="h-80">
                    <PhotoProvider>
                        <PhotoView src={img}>
                            <img src={img} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                </CardHeader>
                <CardBody className="text-center">
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                        {title}
                    </Typography>
                    <Typography color="blue" className="font-medium" textGradient>
                        Price: ${price}
                    </Typography>
                </CardBody>
                <CardFooter className="flex justify-center gap-7 pt-2">
                    <Tooltip content="Like">
                        <Typography
                            as="a"
                            href="#facebook"
                            variant="lead"
                            color="blue"
                            textGradient
                        >
                            <i className="fab fa-facebook" />
                        </Typography>
                    </Tooltip>
                    <Tooltip content="Follow">
                        <Typography
                            as="a"
                            href="#twitter"
                            variant="lead"
                            color="light-blue"
                            textGradient
                        >
                            <i className="fab fa-twitter" />
                        </Typography>
                    </Tooltip>
                    <Tooltip content="See Full Details">
                        <Typography
                            as="a"
                            href="#instagram"
                            variant="lead"
                            color="blue"
                            textGradient
                        >
                            <Link to={`/services/${_id}`}>
                                <button className="btn btn-dark">View Details</button>
                            </Link>
                        </Typography>
                    </Tooltip>
                </CardFooter>
            </Card>
        </div>
    );
};

export default ServiceBox;