import React, { useState, useEffect } from 'react';
import { useLocation, Route, Switch, Redirect } from "react-router-dom"
// Components
import AdminHeader from "../Components/Headers/AdminHeader.jsx";
import Sidebar from "../Components/Sidebar/Sidebar.jsx";
import routes from "../routes";
import { Helmet } from "react-helmet";
import { Button } from "@blueprintjs/core";
export default function Admin() {
    const [activeRoute, setActiveRoute] = useState({
        index: -1,
        name: "Default"
    })
    const [isSidemenuOpen, setIsSidemenuOpen] = useState(false)
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
    const handleSidemenuOpen = () => setIsSidemenuOpen(!isSidemenuOpen);
    useEffect(() => {
        getCurrentRouteText(location.pathname, routes)
    }, [location.pathname]);
    return (
        <React.Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{activeRoute.name} | Blueprintjs Admin Dashboard</title>
            </Helmet>
            <AdminHeader pageName={activeRoute.name} />
            <Button className="ml3 mt3" id="nav-button" onClick={handleSidemenuOpen} large icon="menu">{isSidemenuOpen ? "Close" : "Open"} Menu</Button>
            <div className="row" id="content">
                <div className={`col-lg-3 col-md-3 col-sm-12 col-xs-12 ${isSidemenuOpen ? "open" : "close"}`}>
                    <Sidebar activeRouteIndex={activeRoute.index} />
                </div>
                <div className={`${isSidemenuOpen ? "col-lg-9 col-md-9" : "col-lg-12 col-md-12"} col-sm-12 col-xs-12 p2`}>
                    <Switch>{getRoutes(routes)}</Switch>
                </div>
            </div>
        </React.Fragment>
    );
}