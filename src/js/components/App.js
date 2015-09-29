var React = require('react');
var Cat = require('./Cat.js');
var AppStore = require('../stores/app-store.js');

var App = React.createClass({
   getInitialState: function() {
      return { cats: AppStore.getCats()}
   },
   render: function() {
      var Cats = this.state.cats.map(function(nextCat) {
         return (<Cat name={nextCat.name} id={nextCat.id} img={nextCat.img} key={nextCat.id}/>);
      })

      return (
         <div>
            <h1 className="title">Welcome to cat clicker</h1>
            <div className="cats">
               { Cats }
            </div>
         </div>
      );
   }
});

module.exports = App;