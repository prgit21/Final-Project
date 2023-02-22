import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Action, UserState } from "../store/reducer";
import "./dashboard.css";

import AdminDashboardPage from "./AdminDashboardPage";
import { DashboardPage } from "./DashboardPage";

export const Dashboard = (action : Action,state:UserState) => {
  const admin_status = useSelector<UserState, boolean>(
    (state: UserState) => state.admin
  );

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch({ type: "ENABLE_LOGOUT" });
  };
const handleClick =() =>{
  const {username,password}=action.login_details;
  if (username==='admin' && password===''){
    state.login_status=true
    state.admin=true
  }
  <AdminDashboardPage />
}
  return (
    <>
  <div>
        <span className={"medium-text bold-text"}>Welcome User</span>
        <button onClick={handleLogout} className={"logout-button"}>
          Logout
        </button>
        {/* <button onClick={handleClick} className={"logout-button"}>
          where
        </button>
         */}
          <DashboardPage/>
        
        
          
      
      </div>
    
    </>
  );
};

export default Dashboard;
