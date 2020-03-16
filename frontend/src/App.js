import React, { useEffect } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import CartScreen from "./Screens/CartScreen";
import UserSigninScreen from "./Screens/SigninScreen";
import { useSelector, useDispatch } from "react-redux";
import UserRegisterScreen from "./Screens/RegisterScreen";
import AdminProductsScreen from "./screens/ProductsScreen";
import ShippingSreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import ProfileScreen from "./screens/ProfileScreen";
import AdminOrdersScreen from "./screens/OrdersScreen";
import PrivateRoute from "./components/PrivateRotue";

import { listCategory } from "./actions/productActions";

import "./App.css";

function App() {
  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;

  const list = useSelector(state => state.listCategory);
  const { loading, categories, error } = list;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listCategory());
    return () => {
      //
    };
  }, []);

  // Actions with side bar
  const openMenu = () =>
    document.querySelector(".sidebar").classList.add("open");
  const closeMenu = () =>
    document.querySelector(".sidebar").classList.remove("open");

  window.isAuth = !!userInfo;

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/">amazona</Link>
          </div>
          <div className="header-links">
            <Link to="/cart">Cart</Link>
            {userInfo ? (
              <Link to="/profile">{userInfo.name}</Link>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <a href="#">Admin</a>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/orders">Orders</Link>
                    <Link to="/products">Products</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <ul className="categories">
            {categories &&
              categories.map(category => (
                <li>
                  <Link to={"/category/" + category}>{category}</Link>
                </li>
              ))}
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <PrivateRoute path="/orders" component={AdminOrdersScreen} />
            <PrivateRoute path="/profile" component={ProfileScreen} />
            <PrivateRoute path="/order/:id" component={OrderScreen} />
            <PrivateRoute path="/products" component={AdminProductsScreen} />
            <PrivateRoute path="/shipping" component={ShippingSreen} />
            <PrivateRoute path="/payment" component={PaymentScreen} />
            <PrivateRoute path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/register" component={UserRegisterScreen} />
            <Route path="/signin" component={UserSigninScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/category/:id" component={HomeScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
          </div>
        </main>
        <footer className="footer">All right reserved.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
