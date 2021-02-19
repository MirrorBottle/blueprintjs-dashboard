import React from 'react'
import PropTypes from 'prop-types';
import { Classes, Menu, MenuItem } from "@blueprintjs/core";
import { useHistory } from "react-router-dom"
import routes from "../../routes";
import { Suggest } from "@blueprintjs/select";
function Sidebar({ activeRoute }) {
    const history = useHistory();
    return (
        <Menu large className="bp3-elevation-1 col-lg-2 col-md-2 col-sm-2 col-xs-2 mt3 pt2">
            <Suggest
                inputValueRenderer={(val) => val.title}
                // we may customize the default filmSelectProps.items by
                // adding newly created items to the list, so pass our own.
                itemRenderer={val => (<p>{val.title}</p>)}
                items={[
                    { title: "The Shawshank Redemption", year: 1994 },]}
                noResults={<MenuItem disabled={true} text="No results." />}
                popoverProps={{ minimal: true }}
                fill
                className="mb2"
            />
            {routes.map(route => route.isSidemenu && (
                <MenuItem active={route.id === activeRoute.id} key={route.id} icon={route.icon} text={route.name} onClick={() => !route.subMenu && history.push(`${route.layout + route.path}`)}>
                    {route.subMenu && route.subMenu.map(sub => (
                        <MenuItem active={sub.id === activeRoute.id} key={sub.id} icon={sub.icon} text={sub.name} onClick={() => history.push(`${sub.layout + sub.path}`)} />
                    ))}
                </MenuItem>
            ))}
        </Menu>

    )
}

Sidebar.propTypes = {
    activeRoute: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired
}

export default Sidebar;
