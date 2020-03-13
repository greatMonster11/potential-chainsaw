import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      window.isAuth === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/signin" />
      )
    }
  />
);
export default PrivateRoute;
