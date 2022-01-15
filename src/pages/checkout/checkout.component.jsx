import "./checkout.styles.scss";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckOutButton from "../../components/stripe-button/stripe-button.component";

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove item</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: {total}</span>
      </div>
      <p className="test-warning">
        **The demo is running in test mode**
        <br />
        use 4242424242424242 as a test card number
        <br />
        Any 3 digits CVC + Any future expiration date.
      </p>
      <StripeCheckOutButton price={total} />
    </div>
  );
};
export default CheckoutPage;
