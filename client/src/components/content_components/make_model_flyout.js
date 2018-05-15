import React from 'react';
import Makes from '../makes';

class MakeModelFlyout extends React.Component {
  render() {
    const makeWrap = (make, count) => (
      <div className="make-model--make-item">
        <svg id="" className="make-model--make-item--icon" role="img" viewBox="0 0 49.998 50">
          <path d="M24.998 0C11.192 0 0 11.192 0 25c0 13.809 11.192 25 24.998 25 13.808 0 25-11.191 25-25 .002-13.808-11.189-25-25-25zm-4.146 35.272l-.111-.131-3.154-3.66-4.661-5.409 3.452-3.481L21.038 28l12.593-12.704 3.267 3.79-16.046 16.186z"></path>
        </svg>
        <span>{ make[1] }</span>
        <span className="make-model--make-item--count">({count})</span>
      </div>
    );

    const makesList = Makes.map(makeWrap);

    return(
      <div className="make-model--flyout initial">
        <div className="make-model--make-wrap">{makesList}</div>
        <div className="make-model--model-wrap hidden">model wrap</div>
        <div className="make-model--see-cars hidden">see cars wrap</div>
        <div className="make-model--mobile-wrap hidden">mobile wrap</div>
      </div>    );
  }
}

export default MakeModelFlyout;
/*
class MakeModelWrap extends React.Component {
  render() {
    const makeWrap = (make, count) => (
      <div className="make-model--make-item">
        <svg id="" className="make-model--make-item--icon" role="img" viewBox="0 0 49.998 50">
          <path d="M24.998 0C11.192 0 0 11.192 0 25c0 13.809 11.192 25 24.998 25 13.808 0 25-11.191 25-25 .002-13.808-11.189-25-25-25zm-4.146 35.272l-.111-.131-3.154-3.66-4.661-5.409 3.452-3.481L21.038 28l12.593-12.704 3.267 3.79-16.046 16.186z"></path>
        </svg>
        <span>{ make }</span>
        <span className="make-model--make-item--count">{ count }</span>
      </div>
    );

    return (
      <div className="make-model--flyout initial">
        <div className="make-model--make-wrap hidden"></div>
        <div className="make-model--model-wrap hidden"></div>
        <div className="make-model--see-cars hidden"></div>
        <div className="make-model--mobile-wrap hidden"></div>
      </div>
    );
  }
}
*/
