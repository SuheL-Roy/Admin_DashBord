import React from 'react';
import './featuredinfo.css';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="feturedItem">
                <span className="featuredtitle">Revanue</span>
                <div className="featureMoneyContainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyrate">
                        -11.4 <ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuedSub">Compared to last month</span>
            </div>
            <div className="feturedItem">
                <span className="featuredtitle">Sales</span>
                <div className="featureMoneyContainer">
                    <span className="featuredMoney">$4,415</span>
                    <span className="featuredMoneyrate">
                        -1.4 <ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuedSub">Compared to last month</span>
            </div>
            <div className="feturedItem">
                <span className="featuredtitle">Cost</span>
                <div className="featureMoneyContainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyrate">
                        +2.4 <ArrowUpward className="featuredIcon "/>
                    </span>
                </div>
                <span className="featuedSub">Compared to last month</span>
            </div>
        </div>
    )
}
