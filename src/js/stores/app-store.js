var React = require('react');
var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;
var AppDispatcher = require('../dispatchers/app-dispatcher');
var AppConstants = require('../constants/app-constants');

var CHANGE_EVENT = 'change';

var _numClicks = 0;

var AppStore = assign(EventEmitter.prototype, {
   emitChange: function() {
      this.emit(CHANGE_EVENT);
   },
   addChangeListener: function(callback) {
      this.on(CHANGE_EVENT, callback);
   },
   removeChangeListener: function(callback) {
      this.removeListener(CHANGE_EVENT, callback);
   },
   getNumClicks: function() {
      return _numClicks;
   },
   addClick: function() {
      _numClicks++;
      AppStore.emitChange();
   },
   dispatcherIndex: AppDispatcher.register(function(payload) {
      var action = payload.action;
      switch(action.actionType) {
         case AppConstants.ADD_CLICK:
            AppStore.addClick();
            break
      }
   })
});

module.exports = AppStore;