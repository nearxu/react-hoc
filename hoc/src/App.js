import React, { Component } from "react";
import Props from "./hoc/props";
import Hoc from "./hoc/hoc";
import Props1 from "./hoc/props1";
import Ref from "./hoc/ref";
import Inverse from "./hoc/inverse";
import Header from "./hoc-component/withHeader";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Props />
        <Hoc />
        <Props1 age={26} />
        <Ref age={28} />
        <Inverse age={520} />
        <Header />
      </div>
    );
  }
}

export default App;
