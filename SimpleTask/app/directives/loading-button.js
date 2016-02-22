(function () {
	app.directive('loadingButton', ['$rootScope', function ($rootScope) {
        return {
            restrict: 'C',
            link: function (scope, element, attrs) {
                var loadingBarRequests = 0;

                var onRequestStart = function (event, e) {
                    element[0].disabled = true;
                    loadingBarRequests++;
                };

                var onRequestEnd = function (event, e) {
                    loadingBarRequests--;
                    if (loadingBarRequests <= 0) {
                        element[0].disabled = false;
                    }
                };

                $rootScope.$on('spinning:started', onRequestStart);
                $rootScope.$on('spinning:completed', onRequestEnd);
            }
        }
    }]);
}());
