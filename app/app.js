(function(angular) {
    "use strict";

var app = angular.module('dotMApp',[]);
    
    app.directive('dotMSoundCloud', function(){
            return {
                restrict: 'AE',
                templateUrl: 'app/views/sound-cloud.html'
            }
    });
    
    app.directive('dotMContactForm', function(){
            return {
                templateUrl: 'app/views/contact.html'
            }
    });
    
})(window.angular);