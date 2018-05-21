import React, { Component } from "react";

// function noop() {}
const withHeader = WrapComponent => {
  return class HeaderComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        title: "2ncai"
      };
    }
    setTitle(title) {
      this.setState({ title });
    }
    // static propTypes = {
    //   innerRef: PropTypes.func
    // };

    // static defaultProps = {
    //   innerRef: noop
    // };
    render() {
      return (
        <div>
          <div className="header">{this.state.title}</div>
          <WrapComponent
            setTitle={this.setTitle.bind(this)}
            // ref={this.props.innerRef.bind(this)}
          />
        </div>
      );
    }
  };
};

class Example extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.setTitle("haha i have change title");
  }
  render() {
    return <div>i have withHeader example</div>;
  }
}

export default withHeader(Example);
