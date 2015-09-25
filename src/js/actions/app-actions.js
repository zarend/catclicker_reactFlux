var AppConstants = require('../constants/app-constants');
var AppDispatcher = require('../dispatchers/app-dispatcher');

var AppActions = {
   addClick: function(id) {
      AppDispatcher.handleViewAction({
         actionType: AppConstants.ADD_CLICK,
         id: id
      });
   }
}

module.exports = AppActions;