import "./checkout-item.styles.scss";
import { useDispatch } from "react-redux";
import {
  clearItemFromCart as clearItem,
  removeItem,
  addItem,
} from "../../redux/cart/cart.action";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <button
          className="arrow"
          onClick={() => dispatch(removeItem(cartItem))}
        >
          &#10094;
        </button>
        <span className="value">{quantity}</span>
        <button className="arrow" onClick={() => dispatch(addItem(cartItem))}>
          &#10095;
        </button>
      </div>
      <span className="price">{price}</span>
      <div
        className="remove-button "
        onClick={() => dispatch(clearItem(cartItem))}
      >
        &#10005;
      </div>
    </div>
  );
};
export default CheckoutItem;
