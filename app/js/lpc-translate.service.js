angular.module('LpcWebTest2017')
    .service('LpcTranslateService', ['$http', '$rootScope',function($http,$rootScope){
        var
            
            setPropertiesUrlImpl = function(url){
                $rootScope.propertiesUrl = url;
            },
            loadPropertiesImpl = function(){
                return $http.get($rootScope.propertiesUrl)
            }

        return {
            setPropertiesUrl : setPropertiesUrlImpl,
            loadProperties : loadPropertiesImpl
        }
    }]);