import "./cart-icon.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
const CartIcon = () => {
  const itemCount = useSelector(selectCartItemsCount);
  const dispatch = useDispatch();
  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};
export default CartIcon;
