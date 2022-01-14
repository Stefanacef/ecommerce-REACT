import { createSelector } from "reselect";
const selectShopState = (state) => state.shop;
export const selectCollections = createSelector(
  [selectShopState],
  (shop) => shop.collection
);
export const selectCollectionForPreview = createSelector(
  [selectCollections],
  (collections) => Object.values(collections)
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  );
