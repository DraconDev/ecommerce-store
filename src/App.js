import React, { useState, useEffect } from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import "./pages/homepage/homepage.styles.scss";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx";
import { auth, createUserProfileDocument } from "./firebase/firebase-utils";
import { connect, useDispatch } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

// let unsubscribeFromAuth = null;

function App(props) {
  const dispatch = useDispatch();
  const { setCurrentUser } = props;
  // console.log(dispatch(setCurrentUser)(user));
  // const currentUser = (setCurrentUser: user => dispatch(setCurrentUser(user))
  // const { setCurrentUser } = props;
  // const [currentUser, setCurrentUser] = useState(null);

  // Current User Changes
  // useEffect(() => {
  //   console.log(currentUser);
  // }, [currentUser]);

  //Loads user
  useEffect(() => {
    let unsubscribeFromAuth = null;
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
    return () => {
      unsubscribeFromAuth = null;
    };
  }, []);

  return (
    <div>
      <Header
      // currentUser={currentUser}
      />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
// export default App;
export default connect(null, mapDispatchToProps)(App);
