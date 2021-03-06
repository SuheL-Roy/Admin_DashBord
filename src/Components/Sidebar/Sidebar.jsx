import React from "react";
import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  PlayCircleFilledOutlined
} from "@material-ui/icons";
import {Link} from 'react-router-dom';
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebartitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListitem active">
              <LineStyle className="sidebaricon" />
              Home
            </li>
            </Link>
            <li className="sidebarListitem">
              <Timeline className="sidebaricon" />
              Analytics
            </li>
            <li className="sidebarListitem">
              <TrendingUp className="sidebaricon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebartitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link" >
            <li className="sidebarListitem">
              <PermIdentity className="sidebaricon" />
              Users
            </li>
            </Link>
            <Link to="/movies" className="link">
            <li className="sidebarListitem">
              <PlayCircleFilledOutlined className="sidebaricon" />
              Movies
            </li>
            </Link>
            <li className="sidebarListitem">
              <AttachMoney className="sidebaricon" />
              Transactions
            </li>
            <li className="sidebarListitem">
              <BarChart className="sidebaricon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebartitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListitem ">
              <MailOutline className="sidebaricon" />
              Mail
            </li>
            <li className="sidebarListitem">
              <DynamicFeed className="sidebaricon" />
              Feedback
            </li>
            <li className="sidebarListitem">
              <ChatBubbleOutline className="sidebaricon" />
              Message
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebartitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListitem ">
              <WorkOutline className="sidebaricon" />
              Manage
            </li>
            <li className="sidebarListitem">
              <Timeline className="sidebaricon" />
              Analytics
            </li>
            <li className="sidebarListitem">
              <Report className="sidebaricon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
