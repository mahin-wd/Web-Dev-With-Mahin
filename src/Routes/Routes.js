import { createBrowserRouter } from "react-router-dom";
import About from "../Components/Pages/About/About";
import Contact from "../Components/Pages/Contact/Contact";
import Error from "../Components/Pages/Error/Error";
import Home from "../Components/Pages/Home/Home";
import CodeEasy from "../Components/Pages/Projects/AllProjects/CodeEasy/CodeEasy";
import ComfortLife from "../Components/Pages/Projects/AllProjects/ComfortLife/ComfortLife";
import ZidansHomeKitchen from "../Components/Pages/Projects/AllProjects/ZidansHomeKitchen/ZidansHomeKitchen";
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
                path: "/comfortLife",
                element: <ComfortLife />
            },
            {
                path: "/zidansHomeKitchen",
                element: <ZidansHomeKitchen />
            },
            {
                path: "/codeEasy",
                element: <CodeEasy />
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