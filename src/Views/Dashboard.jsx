import React from 'react'
import { Card, H5, AnchorButton } from "@blueprintjs/core";
import { Line } from 'react-chartjs-2';
export default function Dashboard() {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 1)',
            },
        ]
    };
    return (
        <React.Fragment>
            <div className="row pl2 pr2">
                <div className="col-md-12 col-sm-12 col-xs-12">
                    <Card elevation={1}>
                        <H5>Welcome to Blueprint Admin Dashboard</H5>
                        <p>
                            This admin dashboard made with Blueprint, React-based toolkit. This dashboard main focus is for desktop, so it might be not all responsive in mobile devices. Click "How to Install" to know more or go to about page.
                        </p>
                        <AnchorButton target="_blank" href="https://blueprintjs.com/docs/" text="See Bluprint Docs" className="mr2" icon="share" />
                        <AnchorButton target="_blank" href="https://blueprintjs.com/docs/" text="How to Install!" intent="primary" icon="download" />
                    </Card>
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12 mt3">
                    <Card elevation={1}>
                        <Line data={data} />
                    </Card>
                </div>

            </div>
        </React.Fragment>
    )
}
