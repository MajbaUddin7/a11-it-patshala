import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const AddService = () => {
    const [service, setServices] = useState({});



    const handleAddService = (event) => {
        event.preventDefault();

        // fetch('https://it-patshala-server.vercel.app/services', {
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    event.target.reset();
                }
            })
    }

    const handleInputBlur = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newService = { ...service }
        newService[field] = value;
        setServices(newService);
    }

    const notify = () => {
        if (service) {
            toast.success('Service Added!!!');
        } else {
            toast('Please try again');
        }
    }



    return (
        <div>
            <h2>Add New Service</h2>

            <form onSubmit={handleAddService} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="text">
                        Service Title:
                    </label>
                    <input onBlur={handleInputBlur} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name='title' placeholder='name' required />
                    <br />

                    <label className="block text-gray-700 text-sm font-bold mb-2" for="text">
                        Image URL:
                    </label>
                    <input onBlur={handleInputBlur} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name='img' placeholder='Enter Image URL' required />
                    <br />

                    <label className="block text-gray-700 text-sm font-bold mb-2" for="price">
                        Price:
                    </label>
                    <input onBlur={handleInputBlur} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" name='price' placeholder='Enter Price' required />
                    <br />

                    <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
                        Servic Details:
                    </label>
                    <input onBlur={handleInputBlur} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name='description' placeholder='details' required />
                    <Toaster />
                    <br />
                </div>



                <div className="flex items-center justify-between" >
                    <button onClick={notify} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" >
                        Submit Service
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddService;