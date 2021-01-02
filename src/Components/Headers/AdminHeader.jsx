import React from 'react'
import PropTypes from 'prop-types';
import {
    Button,
    Navbar,
    Menu,
    MenuItem,
    Popover,
    Position
} from "@blueprintjs/core";
import { Suggest } from "@blueprintjs/select";
import Logo from "../../assets/images/logo.png"

function AdminHeader({ pageName, handleOpen }) {
    return (
        <Navbar className="navbar">
            <div className="bp3-navbar-group bp3-align-left">
                <Button large icon="menu" onClick={handleOpen}></Button>
                <img src={Logo} alt="" />
                <div className="bp3-navbar-heading">Blueprint - {pageName}</div>
                <Suggest
                    inputValueRenderer={(val) => val.title}
                    // we may customize the default filmSelectProps.items by
                    // adding newly created items to the list, so pass our own.
                    itemRenderer={val => (<p>{val.title}</p>)}
                    items={[
                        { title: "The Shawshank Redemption", year: 1994 },]}
                    noResults={<MenuItem disabled={true} text="No results." />}
                    popoverProps={{ minimal: true }}
                />
            </div>
            <div className="bp3-navbar-group bp3-align-right">
                <Popover content={
                    <Menu>
                        <MenuItem icon="edit" text="Profile" />
                        <MenuItem icon="lock" text="Change Password" />
                    </Menu>
                } position={Position.BOTTOM_LEFT}>
                    <Button style={{ marginRight: "5px" }} minimal icon="user" text="MirrorBottle" />
                </Popover>
                <Button intent="danger" minimal icon="log-out" text="Logout" />
            </div>
        </Navbar>
    )
}

AdminHeader.propTypes = {
    pageName: PropTypes.string.isRequired,
    handleOpen: PropTypes.func.isRequired
}
export default AdminHeader;