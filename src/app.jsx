import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import store from "./store/";
import { Provider } from "react-redux";
import { PaymentsPage } from "./pages/PaymentsPage/";

import "bootstrap/dist/css/bootstrap.min.css";
import "./app.scss";

const App = () => {
  return <Provider store={store}>
  <Router>
	  <Switch>
		  <Route path={["/"]}>
			  <PaymentsPage />
		  </Route>
	  </Switch>
  </Router>
</Provider>;
};

export default App;
