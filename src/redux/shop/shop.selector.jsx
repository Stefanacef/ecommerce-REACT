import { createSelector } from "reselect";
const selectShopState = (state) => state.shop;
export const selectShop = createSelector([selectShopState], (shop) => shop);
