import ShopActionTypes from "./shop.types";
import {
  firestore,
  convertCollectionsShapshotToMap,
} from "../../firebase/firebase-utils";

// export const updateCollections = (collectionsMap) => {
//   return {
//     type: ShopActionTypes.UPDATE_COLLECTIONS,
//     payload: collectionsMap,
//   };
// };

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

// export const fetchCollectionsSuccess = (collectionsMap) => ({
//   type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
//   payload: collectionsMap,
// });

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");

    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionsShapshotToMap(snapshot);
        // console.log("collectionsMap", Object.values(collectionsMap));
        // updateCollections(Object.values(collectionsMap));
        dispatch(fetchCollectionsSuccess(Object.values(collectionsMap)));
        // setState({ ...state, loading: false });
      })
      .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
  };
};

export const fetchCollectionsSuccess = (collectionsMap) => {
  return {
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap,
  };
};
