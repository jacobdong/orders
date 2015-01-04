angular.module('app')
    .directive('jxlSelect', [function () {
        return {
            restrict: 'E',
            template:'<select></select>',
            link: function (scope, ele, attrs) {
                 ele.select2();
            }
        };
    }])