var React = require('react');
var ReactDOM = require('react-dom');
var Dropdown = require('./components/Dropdown.jsx');
var View = require('./components/View.jsx');

require('./style/base.scss');

var Container = React.createClass({
    getInitialState: function () {
        return {
            name: 'Lea'
        }
    },
    
    changeName: function (newName) {
        this.setState({
            name: newName
        })
    },
    
    render: function () {
        return (
            <div>
                <h1>Baby Name Tester</h1>
                <Dropdown onChange={this.changeName} />
                <View name={this.state.name} />
            </div>
        )
    }
});

ReactDOM.render(
    <Container />, document.getElementById('app')
); 