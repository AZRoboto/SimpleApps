(function () {
    app.factory('busyIndicator', function ($rootScope) {
        var opts = {
            lines: 13, // The number of lines to draw
            length: 10, // The length of each line
            width: 3, // The line thickness
            radius: 10, // The radius of the inner circle
            corners: 1, // Corner roundness (0..1)
            rotate: 0, // The rotation offset
            direction: 1, // 1: clockwise, -1: counterclockwise
            color: '#000', // #rgb or #rrggbb or array of colors
            speed: 1, // Rounds per second
            trail: 48, // Afterglow percentage
            shadow: false, // Whether to render a shadow
            hwaccel: false, // Whether to use hardware acceleration
            className: 'spinner', // The CSS class to assign to the spinner
            zIndex: 2e9, // The z-index (defaults to 2000000000)
            top: '50%', // Top position relative to parent in px
            left: '50%' // Left position relative to parent in px
        };

        var target = document.getElementById('busyIndicator');
        var spinner = new Spinner(opts).spin(target);

        return {
            show: function () {
                $(target).fadeIn('fast');
                spinner.spin(target);
                $rootScope.$broadcast('spinning:started');
            },
            hide: function () {
                $(target).fadeOut('fast');
                spinner.stop();
                $rootScope.$broadcast('spinning:completed');
            },
            buffer: [],
            getTarget: function () {
                return target;
            }
        };
    });
}());