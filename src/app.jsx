import { Switch, BrowserRouter } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "./components";
import { LoginPage, ChatPage } from "./pages";
import { ToastProvider } from "react-toast-notifications";
//importar configuração do firebase;
import { useSelector } from "react-redux";

function App() {
  const { user } = useSelector((store) => store.session);

  const isLogged = !!user;

  return (
    <BrowserRouter>
      <ToastProvider autoDismiss>
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
