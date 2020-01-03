import React from "react"
import Aux from "../../../hoc/auxillary"
import Button from "../../Ui/Button/Button";

export default (props)=>{

    const ingredientsSummary=Object.keys(props.ingredients)
        .map(igKey=>{
            return <li key={igKey}><span style={{textTransform:'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}</li>
        });

    return (
        <Aux>
            <h3>your order summary</h3>
            <p>A delicious burger with the following ingredients!</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total price : {props.price.toFixed(2)} $</strong></p>
            <p>Continue to checkout? </p>
            <Button btnType={"Danger"} clicked={props.cancel}>Cancel</Button>
            <Button btnType={"Success"} clicked={props.continue}>Continue</Button>
        </Aux>
    )
};
