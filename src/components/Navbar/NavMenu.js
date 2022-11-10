import { useState, useEffect, useContext } from "react";
import {
    Navbar,
    // MobileNav,
    Typography,
    Button,
    IconButton,
    MobileNav,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

export default function NavMenu() {
    const [openNav, setOpenNav] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link to='/' className="flex items-center">Home</Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link to='/services' className="flex items-center">Services</Link>
            </Typography>

            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link to='/blog' className="flex items-center">Blog</Link>
            </Typography>
            {
                user?.email ?
                    <>
                        <Link className='ms-4' to="/profile">
                            {user?.photoURL ?
                                <img
                                    style={{ height: '40px', width: '40px' }}
                                    roundedCircle
                                    src={user?.photoURL} alt=''>
                                </img>
                                : <>{user.email}</>
                            }
                        </Link>
                        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                            <Typography
                                as="li"
                                variant="small"
                                color="blue-gray"
                                className="p-1 font-normal"
                            >
                                <Link to='/myreviews' className="flex items-center">My Reviews</Link>
                            </Typography>
                            <Typography
                                as="li"
                                variant="small"
                                color="blue-gray"
                                className="p-1 font-normal"
                            >
                                <Link to='/addservice' className="flex items-center">Add Service</Link>
                            </Typography>
                        </ul>
                        <Button className='ms-3 cs-btn' variant="light" onClick={handleLogOut}>Log out</Button>
                    </>
                    :
                    <Typography
                        as="li"
                        variant="small"
                        color="blue-gray"
                        className="p-1 font-normal"
                    >
                        <Link to='/login' className="flex items-center">Login</Link>
                    </Typography>
            }
        </ul>
    );

    return (
        <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="#"
                    variant="small"
                    className="mr-4 cursor-pointer py-1.5 font-normal"
                >
                    <span>It Pathshala</span>
                    <span>Material Tailwind</span>
                </Typography>
                <div className="hidden lg:block">{navList}</div>
                <Button variant="gradient" size="sm" className="hidden lg:inline-block">
                    <span>Buy Now</span>
                </Button>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
            </div>
            <MobileNav open={openNav}>
                {navList}
            </MobileNav>
        </Navbar>
    );
}