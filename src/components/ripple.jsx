import React from 'react';
import '../style/ripple.scss';

export default (props) => {
  function handleRipple() {
    if (props.rippleState === 1) {
      return <div id="ripple-1" className="ripple-effect-1"></div>;
    } else if (props.rippleState === 2) {
      return <div id="ripple-2" className="ripple-effect-2"></div>;
    }
  }

  return (
    <div>{handleRipple()}</div>
  )
}
