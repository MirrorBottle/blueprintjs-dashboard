import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useHistory, Route, Switch, Redirect } from "react-router-dom"
import { Helmet } from "react-helmet";
import { Classes, Menu, MenuItem, Position, Drawer } from "@blueprintjs/core";
// Components
import AdminHeader from "../Components/Headers/AdminHeader";
import Sidebar from "../Components/Sidebar/Sidebar";
import AdminFooter from "../Components/Footers/AdminFooter";
import routes from "../routes";
export default function Admin() {
    const [activeRoute, setActiveRoute] = useState({
        id: -1,
        name: "Default",
    })
    const location = useLocation();
    const history = useHistory();

    const getCurrentRouteText = (path, thisRoutes) => {
        for (let i = 0; i < thisRoutes.length; i += 1) {
            const menu = thisRoutes[i];
            if (path.includes(menu.layout + menu.path) && !menu.subMenu) {
                const { id, name } = menu;
                return setActiveRoute({ id, name })
            } else if (menu.subMenu) {
                menu.subMenu !== undefined && menu.subMenu.map((sub, key) => {
                    if (path.includes(sub.layout + sub.path)) {
                        const { id, name } = sub;
                        return setActiveRoute({ id, name })
                    }
                    return null;
                })
            }
        }
        return "Brand";
    };

    const getRoutes = (layoutRoutes) => {
        return layoutRoutes.map((prop, key) => {
            // if a route doesn't have any subMenu and its layout is admin
            const propPath = prop.layout + prop.path;
            if (prop.layout === "/admin" && !prop.subMenu) {
                return (
                    <Route
                        exact
                        path={propPath}
                        component={() => <prop.component />}
                        key={key}
                    />
                );
            } else if (prop.subMenu) {
                return (
                    prop.subMenu !== undefined &&
                    prop.subMenu.map((sub, key) => {
                        return (
                            <Route
                                exact
                                path={sub.layout + sub.path}
                                component={sub.component}
                                key={key}
                            />
                        );
                    })
                );
            }
            return <Redirect to="/admin/error/404" key={key} />;
        });
    };

    useEffect(() => {
        getCurrentRouteText(location.pathname, routes)
    }, [location.pathname]);

    return (
        <React.Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{activeRoute.name} | Blueprint Admin Dashboard</title>
            </Helmet>
            <AdminHeader pageName={activeRoute.name} />
            <div className="row">
                <Sidebar activeRoute={activeRoute} />
                <main className="col-lg-10 col-md-10 col-sm-10 col-xs-10 pt3">
                    <Switch>{getRoutes(routes)}</Switch>
                    <AdminFooter />
                </main>
            </div>
        </React.Fragment>
    );
}