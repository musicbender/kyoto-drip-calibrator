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



// function handleRipple() {
  // if (props.rippleState === 1) {
  //   return (<div id="ripple-1" className="ripple-effect-1"></div>);
  // } else if (props.rippleState === 2) {
  //   return (<div id="ripple-2" className="ripple-effect-2"></div>);
  // } else {
  //   console.log('ERROR');
  // }
