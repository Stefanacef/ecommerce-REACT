import "./cart-dropdown.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { Link } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.action";
const CartDropdown = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <p className="empty-message">Your cart is empty</p>
        )}
      </div>
      <Link to="/checkout">
        <CustomButton onClick={() => dispatch(toggleCartHidden())}>
          GO TO CHECKOUT
        </CustomButton>
      </Link>
    </div>
  );
};
export default CartDropdown;
