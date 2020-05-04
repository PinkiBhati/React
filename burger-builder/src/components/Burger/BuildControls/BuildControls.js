import React from 'react'
import classes from './buildControls.module.css'
import BuildControl from './BuildControl/BuildControl';

const controls=[
    {label :'Salad', type:'salad'},
    {label :'Bacon', type:'bacon'},
    {label :'Meat', type:'meat'},
    {label :'Cheese', type:'cheese'}
];
 const BuildControls = (props) => {
     return(
        <div className={classes.BuildControls}>
            <p>Current Price :<strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(cntrl=>(
            <BuildControl
              key={cntrl.label}
              label={cntrl.label}
              added={()=>props.ingredientAdded(cntrl.type)}
              removed={()=>props.ingredientRemoved(cntrl.type)}
              disabled={props.disabled[cntrl.type]}
              />
        ))}
        <button 
        className={classes.OrderButton}
        disabled={!props.purchasable} onClick={props.ordered}>Order Now</button>
    </div>
     )
 };

    


export default BuildControls;
