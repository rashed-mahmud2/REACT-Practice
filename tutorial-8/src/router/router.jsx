import { DiVim } from "react-icons/di";
import { createBrowserRouter } from "react-router";
import App from "../pages/App";
import { Link } from "react-router";
import About from "../pages/About";
import Contact from "../pages/Contact";
import RootLayout from "../pages/RootLayout";
import Login from "../pages/Login";
import PostLists from "../pages/PostLists";
import PostDetails from "../pages/PostDetails";

const rootRouter = createBrowserRouter([
    {path: '/', element: <RootLayout />, 
        children: [
        {path: '/', index:true, element: <App/> },
        {path: '/about', element: <About /> },
        {path: '/contact', element: <Contact />},
        {path: '/posts', element: <PostLists />},
        {path: '/posts/:id', element: <PostDetails />},
    ]},
    {path: '/login', element: <Login />}

])

export default rootRouter

