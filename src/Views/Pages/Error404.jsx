import React from 'react'
import { useHistory } from "react-router-dom";
import { Button, NonIdealState } from "@blueprintjs/core";
export default function Error404() {
    const history = useHistory();

    return (
        <NonIdealState
            icon="zoom-out"
            title="Page Not Found"
            description={
                <React.Fragment>
                    The page you requested may not exist or under development
                    <br />
                    Please try again next time :)
                </React.Fragment>
            }
            className="h-60"
            action={
                <Button
                    intent="primary"
                    icon="arrow-left"
                    text="Back to Dashboard"
                    onClick={() => history.push('/admin/index')}
                />
            }
        />
    )
}
