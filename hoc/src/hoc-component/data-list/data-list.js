import React, { Component } from "react";
import PropTypes from "porp-types";
import Pagination from "./pagination";

const RequestMethodEnum = {
  GET: "get",
  POST: "post"
};

class DataList extends Component {
  constructor(props) {
    super(props);
    let pageIndex = props.pageIndex;
    if (typeof pageIndex !== "number") {
      pageIndex = props.stateIndex;
    }
    this.state = {
      pageIndex,
      data: [],
      hasNext: false
    };
  }
  componentDidMount() {
    pageSize =
      this.state.pageIndex > 0
        ? (this.state.pageIndex - this.props.pageIndex + 1) *
          this.props.pageSize
        : this.props.pageSize;
    this.fetch(this.props.stateIndex, pageSize).then(() => {
      this.props.onPageRequestIdle;
    });
  }
  formatRequestData(data = {}, pageIndex, pageSize) {
    return {
      ...data,
      pageIndex,
      pageSize
    };
  }
  responseHandle(res, resolve) {
    const data = res.data;
    const preData = this.state.data;
    // setState asy
    this.setState(
      {
        data: preData.concat(data)
      },
      () => resolve()
    );
    if (data.length < this.props.pageSize) {
      this.setState({ hasNext: false });
    } else {
      if (!this.state.hasNext) {
        this.setState({ hasNext: true });
      }
    }
  }
  fetch(pageIndex = this.state.pageIndex, pageSize = this.props.pageSize) {
    return new Promise((resolve, reject) => {
      const { url, formatRequestUrl, requestData, requestConfig } = this.props;
      if (requestMethod === RequestMethodEnum.GET) {
        http
          .get(requestUrl, { ...requestConfig })
          .then(res => this.responseHandle(res, resolve));
      } else {
        const data = this.formatRequestData(requestData, pageIndex, pageSize);
        http
          .post(requestUrl, data, { ...requestConfig })
          .then(res => this.responseHandle(res, resolve));
      }
    });
  }
  render() {
    return (
      <div>
        {typeof this.props.hasNext === "boolean" ||
          (this.props.hasNext && (
            <Pagination render={() => <NextPageButton />} />
          ))}
      </div>
    );
  }
}

function NextPageButton({ isPending }) {
  return (
    <div className="navigation-button-block">
      {!isPending ? (
        <button className="navigation-button">加载更多</button>
      ) : (
        <div>加载中</div>
      )}
    </div>
  );
}
