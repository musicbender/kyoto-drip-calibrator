import React from 'react';
import '../style/tempo-view.scss';

export default (props) => {
  return (
    <div className="tempo-view-div">
      <span className="tempo-number">{props.tempo}</span> drips per minute
    </div>
  )
}
