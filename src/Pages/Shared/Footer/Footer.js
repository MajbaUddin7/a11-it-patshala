import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">

                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className=" font-extrabold text-5xl text-gray-900 tracking-widest mb-3">Tax Advisor</h2>
                            <p>Come and take a helping hand.</p>
                        </div>


                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Register Sevices</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link to='/addservices' className="text-gray-600 hover:text-gray-800">Add Servies</Link>
                                </li>
                                <li>
                                    <a href="/services" className="text-gray-600 hover:text-gray-800">Watch Service Details</a>
                                </li>
                                <li>
                                    <Link to='/myreviews' className="text-gray-600 hover:text-gray-800">Add Review</Link>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                                </li>
                            </nav>
                        </div>

                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Import Links</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link to='/login' className="text-gray-600 hover:text-gray-800">Log In</Link>
                                </li>
                                <li>
                                    <Link to='/register' className="text-gray-600 hover:text-gray-800">Register</Link>
                                </li>
                                <li>
                                    <Link to='/blog' className="text-gray-600 hover:text-gray-800">Blog</Link>
                                </li>
                            </nav>
                        </div>

                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Services</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a href="/" className="text-gray-600 hover:text-gray-800">Income Tax</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-600 hover:text-gray-800">Sales Tax</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-600 hover:text-gray-800">Value Added Tax</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-600 hover:text-gray-800">Tax Advice</a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-200">
                    <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
                        <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
                            <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
                                {/* <label for="footer-field" className="leading-7 text-sm text-gray-600">Placeholder</label> */}
                                <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Enter your email' />
                            </div>
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Subscribe</button>
                        </div>
                        <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
                            <a href="/" className="text-gray-500">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a href="/" className="ml-3 text-gray-500">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a href="/" className="ml-3 text-gray-500">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                            <a href="/" className="ml-3 text-gray-500">
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </a>
                        </span>
                    </div>
                </div>
                <div className="bg-gray-100">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-gray-500 text-sm text-center sm:text-left">© 2022 Tax Advisor - BD</p>
                        <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">Developed by Amit Kumar Sutradhar</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;