import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./SearchPage";
import { SearchDataProvider } from "./SearchDataContext";
import { SearchedNameProvider } from "./SearchedNameContext";
import { Apiprovider } from "./API_key";

ReactDOM.render(
  <React.StrictMode>
    <SearchDataProvider>
      <SearchedNameProvider>
        <Router>
          <Switch>
            <Route exact path="/search">
              <SearchPage />
            </Route>
            <Route path="/">
              <Apiprovider>
                <App />
              </Apiprovider>
            </Route>
          </Switch>
        </Router>
      </SearchedNameProvider>
    </SearchDataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
