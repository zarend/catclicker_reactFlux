var React = require('react');
var AppStore = require('../stores/app-store.js');
var AppActions = require('../actions/app-actions.js');

var Cat = React.createClass({
   getInitialState: function() {
      return {clicks: AppStore.getNumClicks()};
   },
   catClickHandler: function() {
      AppActions.addClick();
   },
   componentWillMount: function() {
      AppStore.addChangeListener(this._onChange);
   },
   _onChange: function() {
      this.setState({clicks: AppStore.getNumClicks()})
   },
   render: function() {
      return (
         <div>
            <div>
               <img src="assets/cat.jpg" alt="cat" width="300" onClick={this.catClickHandler}/>
            </div>
            you have clicked {this.state.clicks} times
         </div>
      )
   }
});

module.exports = Cat;
