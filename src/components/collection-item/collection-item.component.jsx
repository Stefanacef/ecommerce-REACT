import { addItem } from "../../redux/cart/cart.action";
import CustomButton from "../custom-button/custom-button.component";
import {
  CollectionItemContainer,
  ImageContainer,
  CollectionFooter,
  Price,
  Name,
  CustomButtonItem,
} from "./collection-item.styles";
import { connect } from "react-redux";
const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <ImageContainer imageUrl={imageUrl} />
      <CollectionFooter>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </CollectionFooter>
      <CustomButtonItem inverted onClick={() => addItem(item)}>
        Add to cart
      </CustomButtonItem>
    </CollectionItemContainer>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CollectionItem);
