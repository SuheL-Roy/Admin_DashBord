import React from 'react'
import './sidebar.css'
import { LineStyle,Timeline,TrendingUp} from '@material-ui/icons';
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebartitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListitem active">
                           <LineStyle className="sidebaricon"/>
                           Home
                        </li>
                        <li className="sidebarListitem">
                           <Timeline className="sidebaricon"/>
                           Analytics
                        </li>
                        <li className="sidebarListitem">
                           <TrendingUp className="sidebaricon"/>
                           Sales
                        </li>

                    </ul>
                </div>
                
            </div>
        </div>
    )
}
