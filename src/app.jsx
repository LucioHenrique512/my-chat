import { Switch, BrowserRouter } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "./components";
import { LoginPage, ChatPage } from "./pages";
import { ToastProvider } from "react-toast-notifications";

function App() {
  const isLogged = false;

  return (
    <BrowserRouter>
      <ToastProvider>
        <Switch>
          <PublicRoute
            exact
            path="/"
            isLogged={isLogged}
            component={LoginPage}
          />
          <PrivateRoute path="/chat" isLogged={isLogged} component={ChatPage} />
        </Switch>
      </ToastProvider>
    </BrowserRouter>
  );
}

export default App;
