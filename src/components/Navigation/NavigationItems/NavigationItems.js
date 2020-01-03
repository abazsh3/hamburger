import React from "react"
import classes from "./NavigationItems.css"
import NavigationItem from "./NavigationItem/NavigationItem";
export default (props)=>(
    <ul className={classes.NavigationItems}>
        <NavigationItem link={"/"} active={true}>Burger Builder</NavigationItem>
        <NavigationItem link={"/"}>Check Out</NavigationItem>
    </ul>
)
