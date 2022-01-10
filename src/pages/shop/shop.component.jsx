import CollectionOverview from "../../components/collections-overview/collections-overview.component";
import { Router, Routes, Route, useLocation } from "react-router-dom";
import { CategoryPage } from "../category/category.component";
const ShopPage = () => {
  return (
    <div className="shop-page">
      <Routes>
        <Route
          exact
          path={`${useLocation().pathname}/:category`}
          element={CollectionOverview}
        />
        <Route></Route>
      </Routes>
    </div>
  );
};
export default ShopPage;
