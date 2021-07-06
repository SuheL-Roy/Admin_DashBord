import React from 'react'
import './home.css';
import FeaturedInfo from '../../Components/featureinfo/FeaturedInfo';
import Chart from '../../Components/chart/Chart';
export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart/>
        </div>
    )
}
