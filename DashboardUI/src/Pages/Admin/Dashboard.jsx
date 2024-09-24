import Cards from '../../Components/Cards/Card'
import React from 'react'
import Barchart from '../../Components/Charts/BarChart/Barchart'
import LineChart from '../../Components/Charts/LineChart/LineChart'
import PieChart from '../../Components/Charts/PieChart/PieChart'

const Dashboard = () => {
    return (
        <>
            <div className="grid gap-4 mb-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-items-center">
                <Cards
                    name={`Total views`}
                    number={`26.4K`}
                    mode={`view`} />
                <Cards
                    name={`Total Profit`}
                    number={`45.6K`}
                    mode={`profit`}
                />
                <Cards
                    name={`Total Products`}
                    number={40}
                    mode={`product`}
                />
                <Cards
                    name={`Total Users`}
                    number={324}
                    mode={`user`}
                />
            </div>
            <div className='flex xl:space-x-5 flex-col xl:flex-row space-y-4 xl:space-y-0 w-full mb-5'>
                <div className='xl:w-2/3'>
                    <Barchart />
                </div>
                <div className="xl:w-1/3">
                    <PieChart />
                </div>
            </div>
            <div className='w-full mb-8'>
                <LineChart />
            </div>
        </>
    )
}

export default Dashboard