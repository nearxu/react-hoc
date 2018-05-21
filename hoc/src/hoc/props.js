import React, { Component } from "react";

//属性代理 将被包裹组件的props和新生成的props一起传递给此组件

const withHeader = (WrapComponent, title = "默认标题") =>
  class Hoc extends Component {
    // static displayName = `hoc(${gitDisplayName(WrapComponent)})`;
    render() {
      return (
        <div>
          {/* <p>默认标题</p> */}
          <p>{title}</p>
          <WrapComponent {...this.props} />
        </div>
      );
    }
  };

const demo = () => {
  return <div>我是普通组件</div>;
};

export default withHeader(demo, "高阶组件添加标题");
