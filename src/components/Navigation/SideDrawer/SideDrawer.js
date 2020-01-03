import React from "react"
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.css"
import Aux from "../../../hoc/auxillary"
import BackDrop from "../../Ui/BackDrop/BackDrop";

export default (props)=>{
    const cssClass=props.show?["Open"]:["Close"];
    return(
        <Aux>
            <BackDrop click={props.backDropClick} show={props.show}/>
            <div className={[classes.SideDrawer,classes[cssClass]].join(" ")}>
                <Logo height={"11%"} margin={"32px"}/>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>

    );
}
