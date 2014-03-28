angular.module('infiniteScroll', []).directive('infiniteScroll',['$window','$timeout',function($window, $timeout) {
  return {
    restrict: 'A',
    link: function(scope, element, attr) {
      var apply, disabled, needMore, rawElement;
      rawElement = element[0];
      disabled = false;
      console.log(attr);
      console.log(attr.infiniteScrollDisabled);
      scope.$watch(attr.infiniteScrollDisabled, function(value) {
        return disabled = value;
      });
      needMore = function() {
        var elementBottom, remaining, windowBottom, windowHeight;
        if (disabled) {
          return false;
        }
        windowHeight = $window.innerHeight;
        windowBottom = $window.pageYOffset + windowHeight;
        elementBottom = rawElement.scrollTop + rawElement.offsetHeight;
        remaining = elementBottom - windowBottom;
        return remaining <= windowHeight * 0.2;
      };
      apply = function() {
        if (needMore()) {
          return $timeout(function() {
            scope.$apply(attr.infiniteScroll);
            return apply();
          });
        }
      };
      angular.element($window).on('scroll', apply);
      scope.$on('$destroy', function() {
        return angular.element($window).off('scroll', apply);
      });
      return apply();
    }
  };
}]);
