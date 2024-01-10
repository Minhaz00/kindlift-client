import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Feed from "../Components/Feed/Feed";
import Events from "../Components/Events/Events";
import Login from "../Components/Login/Login";
import Signup from "../Components/Signup/Signup";
import Org from "../Components/Org/Org";
import Shop from "../Components/Shop/Shop";
import Main from "../Layout/Main";
import EventDetails from "../Components/Events/EventDetails";
import ProductDetails from "../Components/Shop/ProductDetails";
import OrgDetails from "../Components/Org/OrgDetails";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home> ,
                
            },
            {
                path: '/feed',
                element: <Feed></Feed> ,
            },
            {
                path: '/orgs',
                element: <Org></Org> ,
                loader: () => fetch('http://localhost:5000/orgs')
            },
            {
                path: '/orgs/:id',
                element: <OrgDetails></OrgDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/orgs/${params.id}`)
                
            },
            {
                path: '/events',
                element: <Events></Events>,
                loader: () => fetch('http://localhost:5000/events')
                
            },
            {
                path: '/events/:id',
                element: <EventDetails></EventDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/events/${params.id}`)
                
            },
            {
                path: '/Shop',
                element: <Shop></Shop>,
                loader: () => fetch('http://localhost:5000/products')
                
            },
            {
                path: '/products/:id',
                element: <ProductDetails></ProductDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
                
            },

            // {
            //     path: '/TandC',
            //     element: <TandC></TandC>
            // },
            // {
            //     path: '/user/:id',
            //     element: <PrivateRoute><Profile></Profile></PrivateRoute>,
            //     loader: ({params}) => fetch(`http://localhost:5000/user/${params.id}`)
                
            // },
            // {
            //     path: '/appointments',
            //     element: <PrivateRoute><Appointments></Appointments></PrivateRoute>            
            // },
            // {
            //     path: '/followers/:id',
            //     element: <PrivateRoute><Followers></Followers></PrivateRoute>
            // },
            // {
            //     path: '/following/:id',
            //     element: <PrivateRoute><Following></Following></PrivateRoute>     
            // },
            // {
            //     path: '/post/:id',
            //     element: <PostDetails></PostDetails>,
            //     loader: ({params}) => fetch(`http://localhost:5000/post/${params.id}`)
            // },
            // {
            //     path: '/bookmarks',
            //     element: <PrivateRoute><Bookmarks></Bookmarks></PrivateRoute>
            // },
            // {
            //     path: '/search',
            //     element: <PrivateRoute><Search></Search> </PrivateRoute>
            // },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Signup></Signup>
            }
        ]
    },
    // {
    //     path: '*',
    //     element: <Notfound></Notfound>
    // }
    
])