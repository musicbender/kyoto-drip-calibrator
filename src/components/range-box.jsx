import React from 'react';
import '../style/range-box.scss';

export default (props) => {
  let rangeVisability = props.range.range ? "range-show" : "range-hide";

  return (
    <div id="range" className={rangeVisability}></div>
  )
}
