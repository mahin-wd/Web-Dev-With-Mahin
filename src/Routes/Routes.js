import { createBrowserRouter } from "react-router-dom";
import About from "../Components/Pages/About/About";
import Contact from "../Components/Pages/Contact/Contact";
import Error from "../Components/Pages/Error/Error";
import Home from "../Components/Pages/Home/Home";
import Projects from "../Components/Pages/Projects/Projects";
import Skills from "../Components/Pages/Skills/Skills";
import Main from "../Layout/Main";

 const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/skills",
                element: <Skills />
            },
            {
                path: "/projects",
                element: <Projects />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "*",
                element: <Error />
            }
        ]
    }
]);

export default routes;