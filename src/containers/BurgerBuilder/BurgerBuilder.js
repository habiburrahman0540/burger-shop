import React, { Component } from 'react'
import Aux from '../../hoc/Auxs';
import Burger from "../../components/Burger/Burger"
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
const INGREDIENT_PRICES ={
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7
}
class BurgerBuilder extends Component{
    state={
        ingredients:{
            salad:0,
            cheese:0,
            bacon:0,
            meat:0
        },
        totalPrice:4,
        purchasable:false
    }   
    updatePurchaseState(ingredients){
            const sum = Object.keys(ingredients)
                        .map(igkey=>{
                            return ingredients[igkey];
                        })
                        .reduce((sum,el)=>{
                                return sum + el;
                        },0);
            this.setState({purchasable: sum >0})
    }
    addIngredientPriceHandler = (type)=>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount +1 ;
        const updatedIngredient ={
            ...this.state.ingredients
        }
        updatedIngredient[type]=updatedCount;
        const PriceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice+PriceAddition;
        this.setState({totalPrice:newPrice,ingredients:updatedIngredient});
        this.updatePurchaseState(updatedIngredient)
    }
    RemoveIngredientPriceHandler = (type)=>{
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0){
            return ;
        }
        const updatedCount = oldCount -1;
        const updatedIngredient = {
            ...this.state.ingredients
        }
        updatedIngredient[type]=updatedCount;
        const PriceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice-PriceDeduction;
        this.setState({totalPrice:newPrice,ingredients:updatedIngredient});
        this.updatePurchaseState(updatedIngredient)
    }
    render(){
        return(
            <Aux>
                    <Burger ingredients={this.state.ingredients}/>
                <BuildControls ingredientsAdded={this.addIngredientPriceHandler}
                 ingredientRemoved={this.RemoveIngredientPriceHandler}
                 price={this.state.totalPrice}
                 purchasable={this.state.purchasable}
                 />
            </Aux>
        )
    }
}
export default BurgerBuilder;