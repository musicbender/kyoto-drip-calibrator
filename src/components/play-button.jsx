import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import AVPlayArrow from 'material-ui/svg-icons/AV/play-arrow';

export default (props) => {
  return (
    <div>
      <FloatingActionButton onClick={() => props.click()}>
      <AVPlayArrow />
      </FloatingActionButton>
    </div>
  )
}
