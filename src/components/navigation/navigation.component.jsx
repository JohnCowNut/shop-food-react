import React from 'react';
import { connect } from 'react-redux';
import {NavigationContainer ,
        NavStyle,
        NavigationContainerList} from './navigation.styles';
import {toggleCartHidden} from "../../redux/cart/cart.action";
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { ReactComponent as IconCheckOut} from '../../asset/svg/009-tray.svg';
import { auth } from '../../firebase/firebase.utilis';


const Navigation = ({currentUser,toggleCartHidden ,hidden}) => {
    return (
        <NavigationContainer className=" mb-lg">
            <NavStyle to="/" >COWNUT</NavStyle>
            <NavigationContainerList>
                <li >
                    <NavStyle to="/" link="true">Home</NavStyle>
                </li>
                <li> 
                    <NavStyle to="/collection" link="true">Food</NavStyle>
                </li>
                <li>
                    {
                        currentUser 
                        ? <NavStyle link="true" as ="div" onClick = {() => auth.signOut()}>Sign Out</NavStyle>
                        : <NavStyle to="/login" link="true">Login</NavStyle>
                    }
                    
                </li>
                <li>
                    {
                        currentUser ? 
                        <NavStyle as="div" icon="true" onClick={() => toggleCartHidden()} >
                            <span>0</span>
                            <IconCheckOut as="svg" />  
                        </NavStyle>
                        : null
                    }
                </li>
                {
                    hidden ? <CartDropDown/>  : null
                }
                
            </NavigationContainerList>
        </NavigationContainer>
    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    hidden: state.cart.hidden
})
const mapDispatchToProps = dispatch => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
})
export default connect(mapStateToProps,mapDispatchToProps)(Navigation);