import React from "react";
import { Route, Switch } from "react-router-dom";
import Sidebar from "./component/sideBarAdmin";
import UserLagi from "./component/user_list";
import UserList from "./component/user_list";
import Example from "./component/user_list";

export default class Main extends React.Component{
    render(){
        return(
            <Switch>
                <Route path="/" component={UserLagi} />
                {/* <Route path="/user" component={Example} /> */}

            </Switch>
        )
    }
}