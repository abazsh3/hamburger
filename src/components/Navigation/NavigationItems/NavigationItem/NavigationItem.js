import React from "react"
import classes from "./NavigationItem.css"

export default (props) => (
    <li className={classes.NavigationItem}>
        <a className={props.active?classes.active:null} href={props.link}>{props.children}
        </a>
    </li>
)
