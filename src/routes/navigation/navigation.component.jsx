import { Fragment, useContext } from "react"
import { Link, Outlet } from "react-router-dom"
import { ReactComponent as CrwnLogo } from "../../assets/083 crown.svg"
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import './navigation.styles.jsx';
import CartIcon from "../../Components/cart-icon/cart-icon.component";
import CartDropdown from "../../Components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart.context";
import { LogoContainer, NavigationContainer, NavLinks, NavLink } from "./navigation.styles.jsx";
const Navigation = ()=>{
    const { currrentUser } = useContext(UserContext)
    const { isCartOpen } = useContext(CartContext);
    
    return <Fragment>
      <NavigationContainer >
        <LogoContainer  to='/'>
            <CrwnLogo className='Logo' />
        </LogoContainer>
        <NavLinks>
            <NavLink to='/shop'>
                Shop
            </NavLink>
            {
                currrentUser ? (
                    <NavLink as='span' onClick={signOutUser}> SIGN OUT </NavLink>
                ) : <NavLink to='/Auth'>
                        Sign-in
                    </NavLink>

            }
            <CartIcon />
            {isCartOpen && <CartDropdown />}
        </NavLinks>

      </NavigationContainer>
      <Outlet />
    </Fragment>
}

export default Navigation