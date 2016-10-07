import React from 'react';

var StartButton = React.createClass({
    
    render: function () {
        return(
            <div className="start-btn" onClick={this.props.onClick}>
                Start
            </div>
        )
    }
});

export default StartButton;