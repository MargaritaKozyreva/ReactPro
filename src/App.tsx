import React from "react";
import cn from "classnames";
import s from "./App.modules.scss"; // возникла ошибка с scss
                                    // (Cannot find module './App.modules.scss' or its corresponding type declarations)
                                    // победить не получилось
import "./custom.css";

const App = () => {
  return <div className={cn(s.header, "color")}>This is App component</div>;
};

export default App;
