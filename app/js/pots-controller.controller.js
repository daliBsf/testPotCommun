'use strict';

angular.module('LpcWebTest2017')
    .controller('PotsController', ['$scope', 'PotsService', function ($scope, PotsService) {
        $scope.pots = []
        $scope.locale = localStorage.getItem('locale')||'fr'
        $scope.changeLocale = function (locale){ 
            $scope.locale = locale;
            localStorage.setItem('locale',locale)
        }



        PotsService.get().then((response) => {
            $scope.pots = response.data
        })
    }]);