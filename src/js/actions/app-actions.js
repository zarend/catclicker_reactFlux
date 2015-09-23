var AppConstants = require('../constants/app-constants');
var AppDispatcher = require('../dispatchers/app-dispatcher');

var AppActions = {
   addClick: function() {
      AppDispatcher.handleViewAction({
         actionType: AppConstants.ADD_CLICK
      });
   }
}

module.exports = AppActions;