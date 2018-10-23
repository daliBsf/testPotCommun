'use strict';

angular.module('LpcWebTest2017')
    .filter('lpcTranslate',['LpcTranslateService','$rootScope',function(LpcTranslateService,$rootScope){
        //TODO
        LpcTranslateService.loadProperties().then(res=> {
            $rootScope.properties  = res.data; 
        })
        
        var filter = function(key,locale){
            
            if (! angular.isDefined($rootScope.properties))
                return ""; 
            return $rootScope.properties[locale][key] 
        }
        return filter;
    }]);