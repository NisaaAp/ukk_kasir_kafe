import React from "react";
import { Route, Switch } from "react-router-dom";
import Sidebar from "./component/sideBarAdmin";
// import Sidebar from "./component/sideBar1";
import UserLagi from "./component/user_list";
import UserList from "./component/user_list";
import Example from "./component/user_list";
import SidebarLagi from "./component/sideBar1";
import AdminList from "./component/adminList";
import Admin from "./pages/adminEdit";
import Sidenav from "../../frontendcafe/src/component/admin/sidenav";

export default class Main extends React.Component{
    render(){
        return(
            <Switch>
                <Route path="/" component={Sidenav} />
                {/* <Route path="/admin" component={Admin} /> */}

            </Switch>
        )
    }
}