/*
Angular Sample app to simulate the infinite scroll
*/
app = angular.module('infiniteScrollApp', ['ngAnimate', 'infiniteScroll']);

app.controller('MainCtrl', ['$scope',function($scope) {

  $scope.items = [];
  $scope.loadMore = function() {
    var i, item, n, _i, _results;
    _results = [];
    for (i = _i = 0; _i < 1; i = ++_i) {
      n = $scope.items.length + 1;
      
      _results.push($scope.items.push(n));
    }
    return _results;
  };
  $scope.infiniteScrollOptions = {};
  return $scope.loadMore();
}]);



