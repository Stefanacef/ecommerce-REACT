import { Route, Routes } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CategoryPage from "../category/category.component";

const ShopPage = () => {
  return (
    <div className="shop-page">
      <Routes>
        <Route exact path="/*" element={<CollectionsOverview />} />
        <Route exact path=":categoryId" element={<CategoryPage />} />
      </Routes>
    </div>
  );
};
export default ShopPage;
