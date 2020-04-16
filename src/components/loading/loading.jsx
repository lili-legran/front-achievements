/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './loading.scss';

class Loading extends React.Component {
  el = document.createElement('div');

  componentDidMount() {
    this.el.classList.add('loading');
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  render() {
    const { children } = this.props;
    return (
      ReactDOM.createPortal(children, this.el)
    );
  }
}

Loading.propTypes = {
  children: PropTypes.node.isRequired
};

export default Loading;
