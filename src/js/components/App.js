var React = require('react');
var Cat = require('./Cat.js');
var AppStore = require('../stores/app-store.js');

var App = React.createClass({
   getInitialState: function() {
      return { cats: AppStore.getCats()}
   },
   render: function() {
      var Cats = this.state.cats.map(function(nextCat) {
         return (<Cat name={nextCat.name} id={nextCat.id} img={nextCat.img} />);
      })

      return (
         <div>
            <h1>Welcome to cat clicker</h1>
            { Cats }
         </div>
      );
   }
});

module.exports = App;