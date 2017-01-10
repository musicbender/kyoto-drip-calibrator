import React from 'react';
import '../style/ripple.scss';

export default (props) => {
    var rippleClass;

    switch (props.rippleState) {
      case (0):
        rippleClass = {one: 'ripple-hide', two: 'ripple-hide', three: 'ripple-hide'};
        break;
      case (1):
        rippleClass  = {one: 'ripple-1', two: 'ripple-hide', three: 'ripple-3'};
        break;
      case (2):
        rippleClass = {one: 'ripple-1', two: 'ripple-2', three: 'ripple-hide'};
        break;
      case (3):
        rippleClass = {one: 'ripple-hide', two: 'ripple-2', three: 'ripple-3'};
        break;
      default:
        break;
    }

    return (
      <div className="ripple-container">
        <div className={rippleClass.one}></div>
        <div className={rippleClass.two}></div>
        <div className={rippleClass.three}></div>
      </div>
    )
}
