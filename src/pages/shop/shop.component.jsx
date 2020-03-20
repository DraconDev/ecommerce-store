import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
// import SHOP_DATA from "./shop.data";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import {
  firestore,
  convertCollectionsShapshotToMap
} from "../../firebase/firebase-utils";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

function ShopPage(props) {
  const { match, updateCollections } = props;
  const [state, setState] = useState({ loading: true });
  const loading = state.loading;
  // console.log("match", match);
  // console.log("loading", state.loading, loading);

  useEffect(() => {
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsShapshotToMap(snapshot);
      // console.log("collectionsMap", Object.values(collectionsMap));
      updateCollections(Object.values(collectionsMap));
      setState({ ...state, loading: false });
    });
  }, []);

  useEffect(() => {
    // console.log("state changed", state);
  }, [state]);

  return (
    <div className="shop-page">
      {/* <Route
        exact
        path={`${match.path}`}
        loading={"loading"}
        component={CollectionsOverview}
      />

      <Route path={`${match.path}/:collectionId`} component={CollectionPage} /> */}

      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
        )}
      />

      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner isLoading={loading} {...props} />
        )}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCollections: (collectionsMap) =>
      dispatch(updateCollections(collectionsMap))
  };
};

export default connect(null, mapDispatchToProps)(ShopPage);
