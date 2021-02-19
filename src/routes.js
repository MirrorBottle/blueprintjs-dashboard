// Routes
import Dashboard from "./Views/Dashboard";
import Error404 from "./Views/Pages/Error404"
import Login from "./Views/Pages/Login"
import { uid } from "uid"

const routes = [
    {
        id: uid(),
        path: "/index",
        name: "Dashboard",
        icon: "dashboard",
        component: Dashboard,
        layout: "/admin",
        isSidemenu: true,
    },
    {
        id: uid(),
        path: "/about",
        name: "About",
        icon: "info-sign",
        component: Dashboard,
        layout: "/admin",
        isSidemenu: true,
    },
    {
        id: uid(),
        name: "Pages",
        icon: "book",
        layout: "/admin",
        isSidemenu: true,
        subMenu: [
            {
                id: uid(),
                path: "/login",
                name: "Login",
                icon: "log-in",
                component: Login,
                layout: "/auth",
                isSidemenu: true,
            },
            {
                id: uid(),
                path: "/register",
                name: "Register",
                icon: "new-person",
                component: Dashboard,
                layout: "/auth",
                isSidemenu: true,
            },
            {
                id: uid(),
                path: "/error/404",
                name: "404 Not Found",
                icon: "error",
                component: Error404,
                layout: "/admin",
                isSidemenu: true,
            },
        ]
    },
    {
        id: uid(),
        path: "/error/404",
        name: "404 Not Found",
        icon: "error",
        component: Error404,
        layout: "/admin",
        isSidemenu: false,
    },
];

export default routes;