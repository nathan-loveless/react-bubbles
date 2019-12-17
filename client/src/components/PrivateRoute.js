import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...otherComponents }) => {
    return (
      <Route
        {...otherComponents}
        render={() => {
          if (localStorage.getItem("token")) {
            return <Component />;
          } else {
            return <Redirect to="/" />;
          }
        }}
      />
    );
  };
  
  export default PrivateRoute;