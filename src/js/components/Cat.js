var React = require('react');
var AppStore = require('../stores/app-store.js');
var AppActions = require('../actions/app-actions.js');

var Cat = React.createClass({
   getInitialState: function() {
      return {clicks: AppStore.getNumClicks(this.props.id)};
   },
   catClickHandler: function() {
      AppActions.addClick(this.props.id);
   },
   componentWillMount: function() {
      AppStore.addChangeListener(this._onChange);
   },
   _onChange: function() {
      this.setState({clicks: AppStore.getNumClicks(this.props.id)})
   },
   render: function() {
      return (
         <div>
            <div>
               <img src={"assets/" + this.props.img} alt="cat" width="300" onClick={this.catClickHandler}/>
            </div>
            you have clicked {this.props.name} {this.state.clicks} times
         </div>
      )
   }
});

module.exports = Cat;
