var React = require('react');
var ReactDom = require('react-dom');

var News = require('./components/NewsWidget');

var Home = React.createClass({
    render: function(){
        return (
            <div>
                <h1>Reaact works</h1>
            </div>
        )
    }
})

ReactDom.render(<Home />, document.getElementById('content'));
ReactDom.render(<News />, document.getElementById('news'));