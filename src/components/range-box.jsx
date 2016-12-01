import React from 'react';
import '../style/range-box.scss';

export default (props) => {
  const rangeVisability = () => {
    const range = props.range.range;
    if (range) {
      return "range-show";
    } else if (!range) {
      return "range-hide"
    }
  }

  return (
    <div id="range" className={rangeVisability()}></div>
  )
}
