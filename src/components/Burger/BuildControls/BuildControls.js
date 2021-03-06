import React from "react"
import classes from "./BuildControls.css"
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    {label: "Salad", type: "salad"},
    {label: "Beacon", type: "beacon"},
    {label: "Meat", type: "meat"},
    {label: "Cheese", type: "cheese"},
];
const BuildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>current price : <strong>{props.price.toFixed(2)}</strong>  $</p>
            {controls.map(ctrl => {
                return <BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    added={()=>props.ingredientAdded(ctrl.type)}
                    removed={()=>props.ingredientRemoved(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}

                />
            })}
            <button onClick={props.ordered} className={classes.OrderButton} disabled={!props.purchasable}>Order Now!</button>
        </div>
    )
};
export default BuildControls;
