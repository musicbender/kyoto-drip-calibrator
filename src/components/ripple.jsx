import React from 'react';
import '../style/ripple.scss';

export default (props) => {
    var rippleClass;
    if (props.rippleState === 1) {
        rippleClass = {
            one: 'ripple-1',
            two: 'ripple-hide'
        }
    } else if (props.rippleState === 2) {
        rippleClass = {
            one: 'ripple-hide',
            two: 'ripple-2'
        }
    }

    return (
      <div className="ripple-container">
        <div className={rippleClass.one}></div>
        <div className={rippleClass.two}></div>
      </div>
    )
}
