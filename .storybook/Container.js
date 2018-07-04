import React, { Component } from 'react';
import './Container.css';

export default class Container extends Component {
  render() {
    const { story } = this.props;

    return (
      <div
        className="storybook-decorator-container"
      >
        {story()}
      </div>
    );
  }
}
