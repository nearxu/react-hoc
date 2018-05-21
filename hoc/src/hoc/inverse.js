import React, { PureComponent } from "react";

class Example extends PureComponent {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("wrappedComponent did mount");
  }
  render() {
    const { age } = this.props;
    return (
      <div>
        <p>{age}</p>
      </div>
    );
  }
}

// no understand
// 反向继承是指 HOC 继承被包裹组件，这样被包裹的组件 (WrappedComponent) 就是 HOC 的父组件了
//，子组件就可以直接操作父组件的所有公开的方法和字段
const Hoc = WrapComponent => {
  return class Inverse extends WrapComponent {
    componentDidMount() {
      console.log("hoc did mount");
      super.componentDidMount();
    }
    render() {
      return super.render();
    }
  };
};

export default Hoc(Example);
