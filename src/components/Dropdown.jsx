var React = require('react');

require('../style/dropdown.scss');

var Dropdown = React.createClass({
    handleChange: function (e) {
        var name = e.target.value;
        this.props.onChange(name);
    },
     
    render: function () {
        var classList = 'dropdown-div div monkey';
        
        return (
            <div className={classList}>
                <select id="names-dropdown" onChange={this.handleChange}>
                    <option value="Ivy">Ivy</option>
                    <option value="Lea">Lea</option>
                    <option value="Mia">Mia</option>
                    <option value="Everly">Everly</option>
                    <option value="Mila">Mila</option>
                </select>
            </div>
        )
    }
});

module.exports = Dropdown;