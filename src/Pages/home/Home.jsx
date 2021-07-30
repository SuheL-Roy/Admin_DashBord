import React, { useEffect, useMemo, useState } from 'react'
import './home.css';
import FeaturedInfo from '../../Components/featureinfo/FeaturedInfo';
import Chart from '../../Components/chart/Chart';
//import { UserData } from '../../dummyData.js'
import WidgetSm from '../../Components/widgetSm/WidgetSm';
import WidgetLg from '../../Components/widgetLg/WidgetLg';
import axios from 'axios'
export default function Home() {
    const MONTHS = useMemo( () => [
        "jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Agu",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      []
    );
    
      const [userStarts, setUserStarts] = useState([]);
    
      useEffect(() => {
        const getstarts = async () => {
          try {
            const res = await axios.get("/users/starts", {
              headers: {
                token:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZjVkZmY0NTkyM2VjM2FmMDJiMjc4YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyNzY0MTIxNCwiZXhwIjoxNjI3ODE0MDE0fQ.M67pTl0oEq03uwxzxPqmJwoPBjBmJxoKvM_tc-NDuUo",
              },
            });
            //console.log(res);
            //setUserStarts(res.data);
            const startList = res.data.sort(function (a,b){
                return a._id - b._id
            })
            startList.map((item) => {
              return  setUserStarts((prev) => [
                    ...prev,{name:MONTHS[item._id-1], "New User": item.total},
                ])
            })
          } catch (err) {
            console.log(err);
          }
        };
    
        getstarts();
      }, [MONTHS]);
    
      //console.log(userStarts);
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart data={userStarts} title="User Analytics" grid dataKey="New User"/>
            <div className="homeWidget">
                <WidgetSm/>
                <WidgetLg/>

            </div>
        </div>
    )
}
