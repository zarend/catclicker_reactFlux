var React = require('react');
var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;
var AppDispatcher = require('../dispatchers/app-dispatcher');
var AppConstants = require('../constants/app-constants');

var CHANGE_EVENT = 'change';

var _numClicks = 0;

var _cats = [
   { name: 'Burrito', img: 'burrito.jpg' },
   { name: 'Bullet', img: 'bullet.jpg' },
   { name: 'kitty', img: 'cat.jpg' },
   { name: 'Kyle', img: 'kyle.png'},
   { name: 'Lejon', img: 'lejon.jpg'}
];

for (var idx in _cats) {
   _cats[idx].id = idx;
   var count = parseInt(localStorage.getItem('cat_' + _cats[idx].id));
   if (isNaN(count) || count < 0) {
      count = 0;
   }
   _cats[idx].clicks = count;

}

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
   getNumClicks: function(id) {
      return _cats[id].clicks;
   },
   getCats: function() {
      return _cats;
   },
   addClick: function(id) {
      _cats[id].clicks++;
      localStorage.setItem('cat_' + id, _cats[id].clicks);
      AppStore.emitChange();
   },
   dispatcherIndex: AppDispatcher.register(function(payload) {
      var action = payload.action;
      switch(action.actionType) {
         case AppConstants.ADD_CLICK:
            AppStore.addClick(action.id);
            break
      }
   })
});

module.exports = AppStore;