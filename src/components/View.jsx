var React = require('react');

require('../style/view.scss');

var View = React.createClass({
    render: function () {
        var name = this.props.name;
        return (
            <div className="body-txt">
                <p>My daughter's name is {name}.</p>
                <p>We are very excited to meet {name} and look forward to teaching her everything about this world!</p>
            </div>
        )
    } 
});

module.exports = View;