import React, { useEffect, useState } from "react";
import "./widgetsm.css";
import { Visibility } from "@material-ui/icons";
import axios from "axios";

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUser = async () => {
      try {
        const res = await axios.get("/users?new=true", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZjVkZmY0NTkyM2VjM2FmMDJiMjc4YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyNzY0MTIxNCwiZXhwIjoxNjI3ODE0MDE0fQ.M67pTl0oEq03uwxzxPqmJwoPBjBmJxoKvM_tc-NDuUo",
          },
        });
        // console.log(res.data);
        setNewUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getNewUser();
  }, []);
  return (
    <div className="widgetsm">
      <span className="widgetSmTitle">New Join Members </span>
      <ul className="widgetSmList">
        {newUsers.map((users) => {
          return (
            <li className="widgetSmListItem">
              <img
                src={ users.profilePic || "https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"}
                alt="img"
                className="widgetSmImg"
              />
              <div className="widgetUser">
                <span className="widgetSmUsername">{users.username}</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                Display
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
