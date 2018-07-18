import React, { Component } from "react";
import Props from "./hoc/props";
import Hoc from "./hoc/hoc";
import Props1 from "./hoc/props1";
import Ref from "./hoc/ref";
import Inverse from "./hoc/inverse";
import Header from "./hoc-component/withHeader";
import Counter from "./hoc-component/count-down/count-down";
class App extends Component {
  handleTimeout() {
    console.log("执行啦");
  }
  render() {
    console.log("render render");
    return (
      <div className="App">
        <Props />
        <Hoc />
        <Props1 age={26} />
        <Ref age={28} />
        <Inverse age={520} />
        <Header />
        <Counter
          formats={"时,分,秒"}
          remaining={1000}
          timeout={this.handleTimeout.bind(this)}
        />
      </div>
    );
  }
}

export default App;
