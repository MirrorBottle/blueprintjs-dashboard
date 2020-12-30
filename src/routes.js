// Routes
import Dashboard from "./Views/Dashboard";

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
        path: "/charts",
        name: "Chart",
        icon: "chart",
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
                component: Dashboard,
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
                name: "404",
                icon: "error",
                component: Dashboard,
                layout: "/admin",
                isSidemenu: true,
            },
        ]
    },
];

export default routes;