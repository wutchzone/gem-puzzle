import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route } from "react-router-dom";

import reducers from "./reducers";
import Game from "./containers/Game";

//Import styles -> webpack will handle it
import "../styles/gemStyle.css";

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Game />
    </Provider>,
    document.getElementById("root")
);