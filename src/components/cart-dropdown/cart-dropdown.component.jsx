import React, { useMemo } from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import { connect, useSelector } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

// const cartItems = useSelector((state) => state.cart.cartItems);
// const getCartItems = useSelector((state) => state.cart.cartItems);

const CartDropdown = ({ cartItems, history, dispatch }) =>
  // { cartItems }
  {
    console.log("test");
    // const cartItems = useSelector((state) => state.cart.cartItems);
    // console.log("test", cart);
    // const cartItems = selectCartItems(useSelector((state) => state));
    // const cartItems = selectCartItems(useSelector((state) => state));

    return (
      <div className="cart-dropdown">
        <div className="cart-items">
          {cartItems.length ? (
            cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))
          ) : (
            <span className="empty-message">Your cart is empty</span>
          )}
        </div>
        <CustomButton
          onClick={() => {
            history.push("/checkout");
            dispatch(toggleCartHidden());
          }}
        >
          CHECKOUT
        </CustomButton>{" "}
      </div>
    );
  };

// const mapStateToProps = ({ cart: { cartItems } }) => {
//   return { cartItems };
// };

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));

// export default CartDropdown;
