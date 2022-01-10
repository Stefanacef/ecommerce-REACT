import "./collections-overview.styles.scss";
import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component.jsx";
import { selectShop } from "../../redux/shop/shop.selector.jsx";
import { useSelector } from "react-redux";

const CollectionOverview = () => {
  const collections = useSelector(selectShop);

  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps} />;
      })}
    </div>
  );
};
export default CollectionOverview;
