import "./cart-dropdown.styles.scss";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { Link } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.action";
const CartDropdown = ({ cartItems, dispatch }) => {
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

      <Link to="/checkout">
        <CustomButton onClick={() => dispatch(toggleCartHidden())}>
          GO TO CHECKOUT
        </CustomButton>
      </Link>
    </div>
  );
};
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});
export default connect(mapStateToProps)(CartDropdown);
