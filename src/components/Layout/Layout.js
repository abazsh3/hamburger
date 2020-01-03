import React,{useState} from "react";
import Aux from "../../hoc/auxillary";
import classes from "./Layout.css"
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const layout = (props) => {
    const [showSideDrawer,setShowSideDrawer]=useState(false);
    const sideDrawerClickHandler=()=>{
      setShowSideDrawer(!showSideDrawer);
    };
    return (
        <Aux>
            <Toolbar menuClick={sideDrawerClickHandler}/>
            <main className={classes.Content}>{props.children}</main>
            <SideDrawer backDropClick={sideDrawerClickHandler} show={showSideDrawer}/>
        </Aux>)
};
export default layout;
