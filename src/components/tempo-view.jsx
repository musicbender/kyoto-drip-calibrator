import React from 'react';
import '../style/tempo-view.scss';

export default (props) => {
  return (
    <div className="tempo-view-div">
      {props.tempo} drips per minute
    </div>
  )
}
