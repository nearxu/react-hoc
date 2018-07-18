import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      remaining: 0
    };
    this.timer = null;
  }
  componentDidMount() {
    if (this.props.remaining <= 0) return undefined;
    this.setState({ remaining: this.props.remaining });
    this.timer = setInterval(() => this.tick(), 1000);
  }
  componentWillReceiveProps(nextProps) {
    if (
      nextProps.remaining === this.state.remaining ||
      nextProps.remaining === 0 ||
      nextProps.remaining === this.props.remaining
    ) {
      return undefined;
    }
    this.setState({ remaining: nextProps.remaining });
    if (this.timer) {
      clearInterval(this.timer);
    }
    this.timer = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    if (this.timer) clearInterval(this.timer);
  }
  tick() {
    this.setState({ remaining: this.state.remaining - 1 }, () => {
      if (this.state.remaining <= 0) {
        clearInterval(this.timer);
        this.timer = null;
        if (this.props.timeout) this.props.timeout();
      }
    });
  }
  render() {
    let totalSeconds = this.state.remaining;
    const secondsPerDay = 60 * 60 * 24;
    const days = Math.floor(totalSeconds / secondsPerDay);
    totalSeconds %= secondsPerDay;
    const hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const formats = this.props.formats
      ? this.props.formats.split(",")
      : [":", ":", ""];

    if (days > 0) {
      return (
        <time>
          {days}天{hours}小时
        </time>
      );
    }
    return (
      <time>
        {days > 0 ? <span>{days}:</span> : ""}
        {hours > 0 ? (
          <span>
            {hours > 0 ? ("0" + hours).slice(-2) : "0"}
            {formats[0]}
          </span>
        ) : (
          ""
        )}

        <span>
          {hours > 0 || minutes > 0 ? ("0" + minutes).slice(-2) : "00"}
          {formats[1]}
        </span>
        <span>
          {hours > 0 || minutes > 0 || seconds > 0
            ? ("0" + seconds).slice(-2)
            : "00"}
          {formats[2]}
        </span>
      </time>
    );
  }
}
