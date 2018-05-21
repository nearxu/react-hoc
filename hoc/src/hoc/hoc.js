// const add = (x,y,f) => f(x)+f(y) // add(-5,6,Math.abs); 11
import React, { Component } from "react";
class MyComponent extends Component {
  componentWillMount() {
    let data = localStorage.getItem("data");
    this.setState({ data });
  }
  render() {
    return <div>{this.state.data}</div>;
  }
}
// 但当有其他组件也需要从 LocalStorage中获取同样的数据展示出来时，需要在每个组件都重复 componentWillMount中的代码
// 获取不同key的值的需求
const withStore = (WrapComponent, key) => {
  return class Hoc extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: {}
      };
    }
    componentWillMount() {
      let data = localStorage.getItem(key);
      this.setState({ data });
    }
    render() {
      return <WrapComponent {...this.state} {...this.props} />;
    }
  };
};

// 函数式签名写法

const withStores = key => WrapComponent => {
  return class Hoc extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: {}
      };
    }
    componentWillMount() {
      let data = localStorage.getItem(key);
      this.setState({ data });
    }
    render() {
      return <WrapComponent {...this.state} {...this.props} />;
    }
  };
};

const demo = ({ data }) => {
  return <div>{data}</div>;
};

// export default withStore(demo, "name");

export default withStores("name")(demo);
