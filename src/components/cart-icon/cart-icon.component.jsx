import React from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect, useSelector, useDispatch } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
// import { selectCartItems } from "../../redux/cart/cart.selectors";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

const CartIcon = () => {
  // const itemCount = useSelector((state) => state.cart.cartItems).reduce(
  //   (acc, item) => acc + item.quantity,
  //   0
  // );
  const itemCount = selectCartItemsCount(useSelector((state) => state));
  // console.log("test", itemCount);
  const dispatch = useDispatch();
  const toggleVisibility = () => dispatch(toggleCartHidden());
  // console.log("hide", toggleVisibility);

  return (
    <div className="cart-icon" onClick={toggleVisibility}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return { toggleCartHidden: () => dispatch(toggleCartHidden()) };
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

// export default CartIcon;
