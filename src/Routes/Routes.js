import About from "../page/About/About";
import Contact from "../page/Contact/Contact";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import Flight from "../page/Flight/Flight";
import Gallery from "../page/Gallery.js/Gallery";
import Hotels from "../page/Hotels/Hotels";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import Tours from "../page/Tours/Tours";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");
const { default: Home } = require("../page/Home/Home");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/home",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/gallery",
                element: <Gallery></Gallery>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/flight",
                element: <Flight></Flight>
            },
            {
                path: "/tours",
                element: <Tours></Tours>
            },
            {
                path: "/hotels",
                element: <Hotels></Hotels>
            },
        ]
    }
])
export default router;