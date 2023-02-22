import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { UserState } from "../store/reducer";
import "./dashboard.css";
import AdminDashboardPage from "./AdminDashboardPage";
import { DashboardPage } from "./DashboardPage";

export const Dashboard = () => {
  const admin_status = useSelector<UserState, boolean>(
    (state: UserState) => state.admin
  );

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch({ type: "ENABLE_LOGOUT" });
  };

  return (
    <div>
      <div className={"navbar"}>
        <span className={"medium-text bold-text"}>Welcome User</span>
        <button onClick={handleLogout} className={"logout-button"}>
          Logout
        </button>
      </div>
      <div className={"dashboard-page"}>
        <div>
          {admin_status && <AdminDashboardPage />}
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
