import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { smurfListReducer } from "./reducers/smurfListReducer";

const store = createStore(smurfListReducer);

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, 
document.getElementById("root"));
