import React from "react";
import './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'
const controls = [
    {label:'Salad',type:'salad'},
    {label:'Bacon',type:'bacon'},
    {label:'Cheese',type:'cheese'},
    {label:'Meat',type:'meat'},
]
const buildControls =(props)=>(
    <div className="BuildControls">
      <p><strong>Current Price =  {props.price.toFixed(2)}</strong></p> 
        {controls.map(ctrl=>(
            <BuildControl label={ctrl.label} key={ctrl.type}
            clicked={()=>props.ingredientsAdded(ctrl.type)}
            removed={()=>props.ingredientRemoved(ctrl.type)}
            />
        ))}
        <button className="OrderButton" disabled={!props.purchasable}>Order Now</button>
    </div>
);
export default buildControls;