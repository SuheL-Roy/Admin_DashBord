import React from "react";
import "./newuser.css";
export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>UserName</label>
          <input type="text" placeholder="david" />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="david warner" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="text" placeholder="david@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+88 017987375133" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="New York | City" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="Male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="Female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <button className="newUserButton">Create</button>
        </div>
      </form>
    </div>
  );
}
