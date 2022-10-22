import React from "react"
import ReactDOM from "react-dom/client"
import "./styles/scss/global.scss"
import { Provider } from "react-redux"
import { store } from "./store"
import { PopCoin } from "./AppPage"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
   // <React.StrictMode>
   <Provider store={store}>
      <PopCoin />
   </Provider>
   // </React.StrictMode>
)
