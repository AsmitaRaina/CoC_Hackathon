import "./Sidebar.css";
// import {
//   LineStyle,
//   Timeline,
//   TrendingUp,
//   PermIdentity,
//   Storefront,
//   AttachMoney,
//   BarChart,
//   MailOutline,
//   DynamicFeed,
//   ChatBubbleOutline,
//   WorkOutline,
//   Report,
// } from "@@mui/icons-material";

import { LineStyle, Timeline,TrendingUp, PermIdentity, Storefront, AttachMoney, BarChart} from "@mui/icons-material";
import EventIcon from '@mui/icons-material/Event';
import FeedbackIcon from '@mui/icons-material/Feedback';
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
            <Link to="/create" className="link">
            <li className="sidebarListItem active">
              <EventIcon className="sidebarIcon" />
              Event
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Admin</h3>
          <ul className="sidebarList">
            <Link to="/userlist" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Student
              </li>
            </Link>
            <Link to="/viewcomplaints " className="link">
              <li className="sidebarListItem">
                <FeedbackIcon className="sidebarIcon" />
                View Complaints
              </li>
            </Link>
            
          </ul>
        </div>
        {/* <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li> */}
        {/* </ul>
        </div> */}
      </div>
    </div>
  );
}