import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
const sagaMiddleware = createSagaMiddleware();

const middlewares = [logger, thunk, sagaMiddleware];

const isChrome =
  !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

// console.log("store.js", isChrome);

const middlewaresWithDevtools = isChrome
  ? compose(
      (applyMiddleware(...middlewares),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__())
    )
  : applyMiddleware(...middlewares);

// console.log(middlewaresWithDevtools);

export const store = createStore(rootReducer, middlewaresWithDevtools);

// sagaMiddleware.run()

export const persistor = persistStore(store);

export default { store, persistor };
