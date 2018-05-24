import React, { Component } from "react";
import PropTypes from "props-type";
import withHeader from './withHeader';
class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false
    };
  }
  static propTypes = {
    isLoginRequired: PropTypes.bool
  };
  componentDidMount() {
    if (!this.props.isLoginRequired) {
      this.setState({ ready: true });
      return;
    }
    isLogin()
      .then(() => {
        this.setState({ ready: true });
      })
      .catch(e => {
        console.log(e.message);
      });
  }
  render() {
    return (
      <div>
        {this.state.ready ? this.props.children : <div>loading !!!!!</div>}
      </div>
    );
  }
}

export default withHeader(Page)
