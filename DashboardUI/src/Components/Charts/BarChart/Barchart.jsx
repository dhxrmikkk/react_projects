import {
    Card,
    CardBody,
    CardHeader,
    Typography
} from "@material-tailwind/react";
import Chart from "react-apexcharts";

const chartConfig = {
    type: "bar",
    height: 300,
    series: [
        {
            name: "Sales",
            data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
        },
    ],
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
        colors: ["#000"],
        plotOptions: {
            bar: {
                columnWidth: "40%",
                borderRadius: 3,
            },
        },
        xaxis: {
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            labels: {
                style: {
                    colors: "#616161",
                    fontSize: "14px",
                    fontFamily: "inherit",
                    fontWeight: 300,
                },
            },
            categories: [
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
        },
        yaxis: {
            labels: {
                style: {
                    colors: "#616161",
                    fontSize: "14px",
                    fontFamily: "inherit",
                    fontWeight: 300,
                },
            },
        },
        grid: {
            show: true,
            borderColor: "#fff",
            strokeDashArray: 5,
            xaxis: {
                lines: {
                    show: true,
                },
            },
            padding: {
                top: 5,
                right: 20,
            },
        },
        fill: {
            opacity: 0.8,
        },
        tooltip: {
            theme: "dark",
        },
    },
};

const Barchart = () => {
    return (
        <>
            <Card className="w-full font-geist shadow-none border border-[#ededed]">
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
                >
                    <div>
                        <Typography variant="h6" color="blue-gray">
                            <span className="text-xl font-semibold font-geist">Sales</span>
                        </Typography>
                    </div>
                </CardHeader>
                <CardBody className="px-2 pb-0">
                    <Chart {...chartConfig} />
                </CardBody>
            </Card>
        </>
    )
}

export default Barchart