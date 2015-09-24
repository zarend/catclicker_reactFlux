var React = require('react');
var Cat = require('./Cat.js');

var App = React.createClass({
   render: function() {
      return (
         <div>
            <h1>Welcome to cat clicker</h1>
            <Cat />
         </div>
      );
   }
});

module.exports = App;