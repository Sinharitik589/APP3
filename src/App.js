import React from "react";
import "./App.css";
import Header from "./Header";
import Body from "./Body";
import { Hidden } from "@material-ui/core";

function App() {
  return (
    <div>
      <Hidden only={["lg", "md", "sm", "xl"]}>
        <Header />
        <Body />
      </Hidden>
    </div>
  );
}

export default App;
