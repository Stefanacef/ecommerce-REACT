import { Route, Routes } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

const ShopPage = () => {
  return (
    <div className="shop-page">
      <Routes>
        <Route exact path="/*" element={<CollectionsOverview />} />
        <Route exact path="/:collectionId" element={<CollectionPage />} />
      </Routes>
    </div>
  );
};
export default ShopPage;
