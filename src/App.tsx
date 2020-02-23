import React from "react";
import "./App.scss";
import Themer from "./Themes";
import Navbar from "./Navbar";
import { Provider } from "mobx-react";
import Theme from "./Store/Theme";

const App: React.FC = () => {
  return (
    <Provider Theme={Theme}>
      <div className="App">
        <Navbar />
        <Themer />
      </div>
    </Provider>
  );
};

export default App;
