import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

export default (props) => {
  return (
    <div>
      <FloatingActionButton onClick={() => props.click()}>
      <ContentAdd />
      </FloatingActionButton>
    </div>
  )
}
