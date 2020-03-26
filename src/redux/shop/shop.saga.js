import { takeEvery } from "redux-saga/effects";

import ShopActionTypes from "./shop.types";

export function* fetchcollectionsAsync() {
  console.log("i am fired");
}

export function* fetchCollectionsStart() {
  yield takeEvery(ShopActionTypes.UPDATE_COLLECTIONS);
}
