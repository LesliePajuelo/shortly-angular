angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Shorten) {
  $scope.link = {};

  $scope.addLink = function(){
    Shorten.addLink($scope.link).then(function () {
      $location.path('/links');
    }).catch(function (err) {
      console.log(err);
    })
  }
});
