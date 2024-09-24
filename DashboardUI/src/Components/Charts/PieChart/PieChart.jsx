import React from 'react'
import {
    Card,
    CardBody,
    CardHeader,
    Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
const chartConfig = {
    type: "pie",
    width: 300,
    height: 300,
    series: [4500, 5520, 1513, 4547, 6455],
    options: {
        chart: {
            toolbar: {
                show: false,
            },
        },
        title: {
            show: "",
        },
        dataLabels: {
            enabled: false,
        },
        colors: ["#020617", "#ff8f00", "#00897b", "#1e88e5", "#d81b60"],
        legend: {
            show: false,
        },
    },

};

const PieChart = () => {
    return (
        <>
            <Card className='w-full h-full font-geist shadow-none border border-[#ededed]'>
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
                >
                    <div>
                        <Typography variant="h6" color="blue-gray">
                            <span className='text-xl font-semibold font-geist'>Revenue</span>
                        </Typography>
                    </div>
                </CardHeader>
                <CardBody className="mt-4 grid place-items-center px-2 font-geist">
                    <Chart {...chartConfig} />
                </CardBody>
            </Card>
        </>
    )
}

export default PieChart