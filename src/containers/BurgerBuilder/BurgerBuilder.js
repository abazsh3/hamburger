import React, {Component} from "react";
import Aux from "../../hoc/auxillary"
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/Ui/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import BackDrop from "../../components/Ui/BackDrop/BackDrop";

const INGREDIENT_PRICES={
    salad:0.5,
    cheese:0.4,
    beacon:0.7,
    meat:1.3
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            beacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice:4,
        purchasable:false,
        showModal:false
    };
    purchaseHandler=()=>{
      if (this.state.showModal){
          this.setState({showModal:false})
      }  else {
          this.setState({showModal:true})
      }

    };

    continueHandler=()=>{
        alert("You Continue!")
    };

    updatePurchasable=(ingredients)=>{
      const sum=Object.keys(ingredients)
          .map(igKey=>{
              return ingredients[igKey]
          }).reduce((sum,el)=>{
              return sum+el;
          });
        this.setState({purchasable:sum>0})
    };
    addIngredientHandler=(type)=>{
        const oldIngCount=this.state.ingredients[type];
        const updatedIngCount=oldIngCount+1;
        const updatedIngredients={...this.state.ingredients};
        updatedIngredients[type]=updatedIngCount;

        const newPrice=this.state.totalPrice+INGREDIENT_PRICES[type];

        this.setState({totalPrice:newPrice,ingredients:updatedIngredients});
        this.updatePurchasable(updatedIngredients);
    };
    removeIngredientHandler=(type)=>{
        if (this.state.ingredients[type]>0){
            const oldIngCount=this.state.ingredients[type];
            const updatedIngCount=oldIngCount-1;
            const updatedIngredients={...this.state.ingredients};
            updatedIngredients[type]=updatedIngCount;

            const newPrice=this.state.totalPrice-INGREDIENT_PRICES[type];

            this.setState({totalPrice:newPrice,ingredients:updatedIngredients});
            this.updatePurchasable(updatedIngredients);
        }
    };

    render() {
        const disabledInfo={...this.state.ingredients};
        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key]<=0;
        }
        return (

            <Aux>
                <Modal show={this.state.showModal} backDropClick={this.purchaseHandler}>
                    <OrderSummary price={this.state.totalPrice}
                                  ingredients={this.state.ingredients}
                                  cancel={this.purchaseHandler}
                                  continue={this.continueHandler}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    ordered={this.purchaseHandler}
                    disabled={disabledInfo}
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                />


            </Aux>
        );
    }
}

export default BurgerBuilder;
