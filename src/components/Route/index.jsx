import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ isLogged, ...rest }) => {
  return isLogged ? <Route {...rest} /> : <Redirect to="/" />;
};

export const PublicRoute = ({ isLogged, ...rest }) => {
  return !isLogged ? <Route {...rest} /> : <Redirect to="/chat" />;
};
