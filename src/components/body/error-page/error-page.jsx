import React from 'react';
import './error-page.scss';

class ErrorPage extends React.Component {
  render() {
    return (
      <div className="error-page">
        <h1> Ooops! 404 </h1>
        <div className='error-page__description'>
          This page was not found.
        </div>
      </div>
    )
  }
}

export default ErrorPage;