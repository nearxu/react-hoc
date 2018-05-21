import React, { PureComponent, Component } from "react";

class demo extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, age, github } = this.props;
    return (
      <div>
        <p>{name}</p>
        <p>{age}</p>
        <p>{github}</p>
      </div>
    );
  }
}

const Enhance = WrapComponent => {
  class Hoc extends PureComponent {
    render() {
      const props = Object.assign({}, this.props, {
        name: "hello tom",
        github: "我的上面还有一层props  age"
      });
      return <WrapComponent {...props} />;
    }
  }
  return Hoc;
};

export default Enhance(demo);
