import { createBrowserRouter } from "react-router-dom";
import Main from "../../components/Layout/Main";
import Home from "../Home/Home/Home";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import Services from "../Home/Services/Services";
import CheckOut from "../CheckOut/CheckOut";
import BookService from "../BookService/BookService";
import Bookings from "../Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main />,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: 'login',
                element:<Login></Login>
            },
            {
                path: 'sign-up',
                element:<SignUp></SignUp>
            },
            {
                path: 'book/:id',
                element: <BookService></BookService>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: 'bookings',
                element:<PrivateRoute><Bookings></Bookings></PrivateRoute>
            },
            {
                path: 'checkout/:id',
                element: <CheckOut></CheckOut>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            }
        ]
    }
])

export default router;