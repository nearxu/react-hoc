import React, { PureComponent } from "react";

class Example extends PureComponent {
  constructor(props) {
    super(props);
    this.consoleFun.bind(this);
  }

  consoleFun() {
    console.log("hello world");
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

// 如果想要在 HOC 中执行被包裹组件的一些方法，就可以在 props 上组装一下 ref 这个属性，
// 就可以获取到被包裹组件的实例，从而获取到实例的 props 以及它的方法。
const Enhance = WrapComponent => {
  return class Hoc extends PureComponent {
    initFunc(instance) {
      instance.consoleFun();
    }
    render() {
      const props = Object.assign({}, this.props, {
        ref: this.initFunc.bind(this)
      });
      return <WrapComponent {...props} />;
    }
  };
};

export default Enhance(Example);
