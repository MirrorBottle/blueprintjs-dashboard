// Icons
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
// Routes
import Dashboard from "./Views/Dashboard";

const routes = [
    {
        path: "/index",
        name: "Dashboard",
        icon: DashboardIcon,
        component: Dashboard,
        layout: "/admin",
        isSidemenu: true,
    },
    {
        path: "/accounts",
        name: "Account Tree",
        icon: AccountTreeIcon,
        component: Dashboard,
        layout: "/admin",
        isSidemenu: true,
    },
];

export default routes;