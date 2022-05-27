import React from "react";

import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";
import Agenda from "./Agenda";

function Dashboard({ User, user, Next, error, Logout }) {
    
    return(

        <div className= "app-container">
            <AppHeader></AppHeader>
            <div class="app-content">
                <AppSidebar Logout={Logout}></AppSidebar>
                <Agenda></Agenda>
                
                
            </div>
        </div>
    )

}

export default Dashboard;