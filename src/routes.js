// Routes
import Dashboard from "./Views/Dashboard";
import Error404 from "./Views/Pages/Error404"
import Login from "./Views/Pages/Login"

const routes = [
    {
        id: 1,
        path: "/index",
        name: "Dashboard",
        icon: "dashboard",
        component: Dashboard,
        layout: "/admin",
        isSidemenu: true,
    },
    {
        id: 2,
        path: "/about",
        name: "About",
        icon: "info-sign",
        component: Dashboard,
        layout: "/admin",
        isSidemenu: true,
    },
    {
        id: 3,
        name: "Pages",
        icon: "book",
        layout: "/admin",
        isSidemenu: true,
        subMenu: [
            {
                id: 4,
                path: "/login",
                name: "Login",
                icon: "log-in",
                component: Login,
                layout: "/auth",
                isSidemenu: true,
            },
            {
                id: 5,
                path: "/register",
                name: "Register",
                icon: "new-person",
                component: Dashboard,
                layout: "/auth",
                isSidemenu: true,
            },
            {
                id: 6,
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
        id: 7,
        path: "/error/404",
        name: "404 Not Found",
        icon: "error",
        component: Error404,
        layout: "/admin",
        isSidemenu: false,
    },
];

export default routes;