'use strict';

angular.module('LpcWebTest2017')
    .directive('lpcLazyBackground', [function () {

      function loadImage(elem,src) {
        var img = new Image();

        img.onload = function () {
          setPhotoSrc(elem, src);
        };
        
        img.src = src;
       
      }

      function setPhotoSrc(elem, src) {
        elem.css('background-image', 'url("' + src + '")');

      }


      var lpcLazyBackgroundLink = function (scope, elem, attr) {
        elem.addClass("loading")
        loadImage(elem, scope.lpcLazyBackground)
      }
      
  
  return {
    restrict: 'A', scope: {lpcLazyBackground: '='}, link: lpcLazyBackgroundLink
  }

}]);
