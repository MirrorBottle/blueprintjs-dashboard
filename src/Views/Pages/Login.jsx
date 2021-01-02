import React, { useState } from 'react'
import { Button, Card, Tooltip, InputGroup, H2 } from "@blueprintjs/core";
import { Link } from "react-router-dom"
import Logo from "../../assets/images/logo.png"
export default function Login() {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const lockButton = (
        <Tooltip content={`${isShowPassword ? "Hide" : "Show"} Password`}>
            <Button
                icon={isShowPassword ? "eye-off" : "eye-open"}
                intent="warning"
                minimal
                onClick={() => setIsShowPassword(!isShowPassword)}
            />
        </Tooltip>
    )
    return (
        <Card elevation={2} className="row" style={{ maxWidth: "450px" }}>
            <div className="col-lg-12 col-md-12 mb3 col-sm-12 col-xs-12 d-flex justify-content-center flex-column">
                <img src={Logo} alt="" width="100px" style={{ margin: "auto" }} />
                <H2 style={{ margin: "auto" }}>Login</H2>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <InputGroup
                    large
                    className="mb2"
                    placeholder="Enter your username..."
                    leftIcon="user"
                    type="text"
                />
                <InputGroup
                    large
                    placeholder="Enter your password..."
                    leftIcon="lock"
                    rightElement={lockButton}
                    type={isShowPassword ? "text" : "password"}
                />
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt3">
                <Button text="Submit" large fill button intent="primary" className="mb2" />
                <Link to="/admin/index">Back to Dashboard</Link>
            </div>
        </Card>
    )
}
