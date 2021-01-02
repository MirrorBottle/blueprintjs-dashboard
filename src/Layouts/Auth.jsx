import React, { useState, useEffect } from 'react';
import { useLocation, Route, Switch } from "react-router-dom"
import { Helmet } from "react-helmet";
// Components
import AdminFooter from "../Components/Footers/AdminFooter";
import routes from "../routes";
export default function Auth() {
    const [activeRoute, setActiveRoute] = useState({
        index: -1,
        name: "Default"
    })
    const location = useLocation();

    const getCurrentRouteText = (path, thisRoutes) => {
        for (let i = 0; i < thisRoutes.length; i += 1) {
            const menu = thisRoutes[i];
            if (path.includes(menu.layout + menu.path) && !menu.subMenu) {
                setActiveRoute({
                    index: i,
                    name: menu.name
                })
            } else if (menu.subMenu) {
                menu.subMenu !== undefined && menu.subMenu.map((sub, key) => {
                    if (path.includes(sub.layout + sub.path)) {
                        return setActiveRoute({
                            index: i,
                            name: sub.name
                        })
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
            if (prop.layout === "/auth" && !prop.subMenu) {
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
            return null;
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
            <main className="p4 auth-layout">
                <Switch>{getRoutes(routes)}</Switch>
            </main>
            <AdminFooter />
        </React.Fragment>
    );
}