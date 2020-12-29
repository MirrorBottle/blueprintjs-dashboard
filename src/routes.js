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
        subMenu: [
            {
                id: 3,
                path: "/something",
                name: "Dashboard",
                icon: "dashboard",
                component: Dashboard,
                layout: "/admin",
                isSidemenu: true,
            }
        ]
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
];

export default routes;