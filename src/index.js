import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { events } from "./reducers";
import logger from "redux-logger";
import thunk from "redux-thunk";


let store = createStore(events, applyMiddleware(thunk, logger));


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
