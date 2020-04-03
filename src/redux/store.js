import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist";
// import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// console.log(process.env.NODE_ENV);
// const sagaMiddleware = createSagaMiddleware();

const initialState = {};
const middlewares = [
  logger,
  thunk,
  // , sagaMiddleware
];

const devTools =
  process.env.NODE_ENV === "production"
    ? applyMiddleware(...middlewares)
    : composeWithDevTools(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, initialState, devTools);

// const isChrome =
//   !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

// // console.log("store.js", isChrome);

// const middlewaresWithDevtools = isChrome
//   ? compose(
//       applyMiddleware(...middlewares),
//       window.__REDUX_DEVTOOLS_EXTENSION__ &&
//         window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
//   : applyMiddleware(...middlewares);

// // console.log(middlewaresWithDevtools);

// export const store = createStore(rootReducer, middlewaresWithDevtools);

export const persistor = persistStore(store);

export default { store, persistor };
