var React = require('react');

var NewsWidget = React.createClass({
    render: function(){
        return(
            <div>
                <h3>News are belows</h3>
                <ul>
                    <li>BBC</li>
                    <li>Local</li>
                    <li>Tamil</li>
                </ul>
            </div>
        )
    }
})

module.exports = NewsWidget;