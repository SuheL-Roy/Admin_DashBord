import React from 'react'
import './home.css';
import FeaturedInfo from '../../Components/featureinfo/FeaturedInfo';
import Chart from '../../Components/chart/Chart';
import { UserData } from '../../dummyData.js'
import WidgetSm from '../../Components/widgetSm/WidgetSm';
import WidgetLg from '../../Components/widgetLg/WidgetLg';
export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart data={UserData} title="User Analytics" grid dataKey="Active User"/>
            <div className="homeWidget">
                <WidgetSm/>
                <WidgetLg/>

            </div>
        </div>
    )
}
