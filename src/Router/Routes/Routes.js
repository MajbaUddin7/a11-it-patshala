import Main from "../../Layout/Main";
import MyReviews from "../../MyReviews/MyReviews";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import LogIn from "../../Pages/Join/LogIn/LogIn";
import Register from "../../Pages/Join/Register/Register";
import AddService from "../../Pages/Services/AddService/AddService";
import ServiceDetail from "../../Pages/Services/ServiceDetails.js/ServiceDetail";
import Services from "../../Pages/Services/Services";
import PrivateRoute from "../PrivateRoute ";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/services/:id',
                element: <ServiceDetail></ServiceDetail>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
                // loader: ({ params }) => fetch(`https://it-patshala-server.vercel.app/services/${params.id}`)

            },
            {
                path: '/myreviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>

            },
            {
                path: '/register',
                element: <Register></Register>

            }
        ]
    }
]);

export default router;