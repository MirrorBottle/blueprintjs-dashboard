import React from 'react'
import { Card, H5, H1, H3, Icon, AnchorButton, Callout, Button, Colors } from "@blueprintjs/core";
import { Line, Bar } from 'react-chartjs-2';
export default function Dashboard() {
    const items = [...new Array(15)].map((item, index) => (`Items ${index + 1}`))
    const lineData = {
        labels: items,
        datasets: [
            {
                label: 'Sales This Month',
                data: [...new Array(15)].map((item, index) => Math.floor(Math.random() * 1000)),
                fill: false,
                backgroundColor: 'rgb(49,178,233)',
                borderColor: 'rgb(49,178,233,.4)',
            },
        ]
    };
    const barData = {
        labels: items,
        datasets: [
            {
                label: 'Package Confirm',
                data: [...new Array(15)].map((item, index) => Math.floor(Math.random() * 300)),
                backgroundColor: 'rgb(247,84,80)',
            },
            {
                label: 'Shipping',
                data: [...new Array(15)].map((item, index) => Math.floor(Math.random() * 400)),
                backgroundColor: 'rgb(46,172,229)',
            },
            {
                label: 'Packaging',
                data: [...new Array(15)].map((item, index) => Math.floor(Math.random() * 400)),
                backgroundColor: 'rgb(0,179,110)',
            },
        ],
    }
    return (
        <React.Fragment>
            <div className="row pl2 pr2">
                <div className="col-md-12 col-sm-12 col-xs-12">
                    <Card elevation={1}>
                        <H3>Welcome to Blueprint Admin Dashboard</H3>
                        <p>
                            This admin dashboard made with Blueprint, React-based toolkit. This dashboard main focus is for desktop, so it might be not all responsive in mobile devices. Click "How to Install" to know more or go to about page.
                        </p>
                        <AnchorButton target="_blank" href="https://blueprintjs.com/docs/" text="See Bluprint Docs" className="mr2" icon="share" />
                        <AnchorButton target="_blank" href="https://blueprintjs.com/docs/" text="How to Install!" intent="primary" icon="share" />
                    </Card>
                </div>
                <div className="col-lg-3 col-md-3 mt2 col-sm-12 col-xs-12">
                    <Card elevation={1}>
                        <H3 style={{ color: Colors.BLUE2 }}>Total Shipment</H3>
                        <H1 style={{ color: Colors.BLUE2 }}>23.000</H1>
                        <H5>
                            <Icon icon="arrow-up" intent="dange" />
                            <span style={{ color: Colors.GREEN2 }}>10% </span>
                            from last month
                        </H5>
                    </Card>
                </div>
                <div className="col-lg-3 col-md-3 mt2 col-sm-12 col-xs-12">
                    <Card elevation={1}>
                        <H3 style={{ color: Colors.BLUE2 }}>Sells Revenue</H3>
                        <H1 style={{ color: Colors.BLUE2 }}>57%</H1>
                        <H5>
                            <Icon icon="arrow-down" intent="danger" />
                            <span style={{ color: Colors.RED2 }}>8% </span>
                            from last month
                        </H5>
                    </Card>
                </div>
                <div className="col-lg-3 col-md-3 mt2 col-sm-12 col-xs-12">
                    <Card elevation={1}>
                        <H3 style={{ color: Colors.BLUE1 }}>Users</H3>
                        <H1 style={{ color: Colors.BLUE1 }}>1.280</H1>
                        <H5>
                            <Icon icon="arrow-up" intent="success" />
                            <span style={{ color: Colors.GREEN2 }}>5% </span>
                            from last month
                        </H5>
                    </Card>
                </div>
                <div className="col-lg-3 col-md-3 mt2 col-sm-12 col-xs-12">
                    <Card elevation={1}>
                        <H3 style={{ color: Colors.BLUE1 }}>Late Shipments</H3>
                        <H1 style={{ color: Colors.BLUE1 }}>230</H1>
                        <H5>
                            <Icon icon="arrow-down" intent="success" />
                            <span style={{ color: Colors.GREEN2 }}>10% </span>
                            from last month
                        </H5>
                    </Card>
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12 mt3">
                    <Card elevation={1}>
                        <Line data={lineData} options={{
                            elements: {
                                line: {
                                    tension: 0
                                }
                            }
                        }} />
                    </Card>
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12 mt3">
                    <Card elevation={1}>
                        <Bar data={barData} options={{
                            scales: {
                                yAxes: [
                                    {
                                        ticks: {
                                            beginAtZero: true,
                                        },
                                    },
                                ],
                            },
                        }} />
                    </Card>
                </div>
            </div>
        </React.Fragment>
    )
}
