import React from 'react';
import heroImg from '../../assets/hero-banner.jpg'

const Carousel = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-gray-900">A Perfect Place for
                            <br className="hidden lg:inline-block" />TAX Law Consultation
                        </h1>
                        <p className="mb-8 leading-relaxed">7 years of experience working with high net worth individuals, financial advisors, attorneys, entrepreneurs, and business of all sizes, I want to be your trusted tax advisor!</p>
                        <p className='mb-8'>I am a licensed attorney with a focus on business/tax law and am currently pursuing a graduate tax law program (LL.M) at Georgetown Law.</p>

                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Contact Now</button>
                            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Learn More</button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src={heroImg} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Carousel;