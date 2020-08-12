import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { GlobalContextProvider } from './GlobalContext'
function App() {
  const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse">Loading...</div>
    </div>
  );
  const Landing = React.lazy(() => import("./components/Landing.js"));
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route
              exact
              name="Login Page"
              render={(props) => <Landing {...props} />}
            />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    </GlobalContextProvider>
  );
}

export default App;
