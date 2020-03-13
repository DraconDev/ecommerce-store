import React, { useState } from "react";
import { Route } from "react-router-dom";
// import SHOP_DATA from "./shop.data";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

function ShopPage(
  props
  // , { match }
) {
  console.log("match", props);
  return (
    <div className="shop-page">
      {/* <CollectionsOverview /> */}
      <Route
        exact
        path={`${props.match.path}`}
        component={CollectionsOverview}
      />
      <Route
        path={`${props.match.path}/:collectionId`}
        component={CollectionPage}
      />
    </div>
  );
}

export default ShopPage;
