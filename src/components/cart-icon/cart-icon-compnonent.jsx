import React from 'react';
import {connect} from "react-redux";
import{toggleCartHidden} from "../../redux/cart/cart.actions";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors"
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";



import "./cart-icon.styles.scss"

const CartIcon =({toggleCartHidden,itemCount})=>(
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{itemCount}</span>
    </div>  
);

//cartitem kaha say lay ga ye
//reduce k sath ni chlra
const mapStateToProps=(state)=>({
    itemCount: selectCartItemsCount(state)
});
//is fucntion may kia hora
const mapToDispatchProps= dispatch =>({
    toggleCartHidden:()=> dispatch(toggleCartHidden())
});

export default connect(mapStateToProps,mapToDispatchProps)(CartIcon);