import React from 'react';
import '../style/ripple.scss';

export default (props) => {
    let rippleClass = (props.rippleState === 1) ? {one: 'ripple-1', two: 'ripple-hide'} : {one: 'ripple-hide', two: 'ripple-2'};

    return (
      <div className="ripple-container">
        <div className={rippleClass.one}></div>
        <div className={rippleClass.two}></div>
      </div>
    )
}
