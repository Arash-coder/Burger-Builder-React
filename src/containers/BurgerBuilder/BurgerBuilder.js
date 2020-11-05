import React , {Component} from 'react';

import Auxiliary from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'; 
import Buildcontrols from '../../components/Burger/BuildControls/Buildcontrols';
import Modal from '../../components/UI/Modal/Modal'
import Ordersummary from '../../components/Burger/Ordersummary/Ordersummary';


const INGREDIENT_PRICES = {
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7 
};

class BurgerBuilder extends Component{
    state = {
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalprice:4,
        purchasable:false,
        purchasing:false
    }

    updatepurchasestate(ingredients) {
        const sum = Object.keys(ingredients)
        .map(igkey=>{
            return ingredients[igkey];
        })
        .reduce((sum ,el)=>{
            return sum + el;
        },0)
        this.setState({purchasable:sum > 0})
    };

    addingredienthandler = (type)=>{
        const oldcount = this.state.ingredients[type];
        const updatecount = oldcount + 1 ;
        const updateingredients = {
            ...this.state.ingredients
        };
        updateingredients[type] = updatecount;
        const priceAddintion = INGREDIENT_PRICES[type];
        const oldprice = this.state.totalprice;
        const newprice = oldprice + priceAddintion ;
        this.setState({
            totalprice: newprice,
            ingredients: updateingredients
        });
        this.updatepurchasestate(updateingredients);
    }
    removeingredienthandler = (type)=>{

        const oldcount = this.state.ingredients[type];
        if(oldcount<=0){
            return;
        }
        const updatecount = oldcount - 1 ;
        const updateingredients = {
            ...this.state.ingredients
        };
        updateingredients[type] = updatecount;
        const pricededuction = INGREDIENT_PRICES[type];
        const oldprice = this.state.totalprice;
        const newprice = oldprice - pricededuction ;
        this.setState({
            totalprice: newprice,
            ingredients: updateingredients
        });
        this.updatepurchasestate(updateingredients);
    }

    purchasehandler=()=>{
        this.setState({purchasing:true})
    }
    purchasecanselhadler=()=>{
        this.setState({purchasing:false})
    }
    purchasecontinuehandler=()=>{
        alert('You continue!');
    }
    render(){
        const disabledinfo ={
            ...this.state.ingredients
        };
        for(let key in disabledinfo){
            disabledinfo[key] = disabledinfo [key] <=0
        }
        return(
            <Auxiliary>
                <Modal show={this.state.purchasing} modalclosed={this.purchasecanselhadler}>
                    <Ordersummary 
                    price={this.state.totalprice}
                    purchasecontinued={this.purchasecontinuehandler}
                    purchasecancel={this.purchasecanselhadler}
                    ingredients={this.state.ingredients} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <Buildcontrols 
                ingredientadded={this.addingredienthandler} 
                ingredientremoveprop={this.removeingredienthandler} 
                disabled={disabledinfo}
                price={this.state.totalprice} 
                purchasable={this.state.purchasable}
                ordered={this.purchasehandler}
                />
            </Auxiliary>
        );
    }
}
export default BurgerBuilder;