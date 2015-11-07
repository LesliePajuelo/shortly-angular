angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Shorten) {
  $scope.link = {};

  $scope.addLink = function(){
    Shorten.addLink($scope.link).then(function () {
      //?? convert link to a code
      console.log('before catch');
    }).catch(function (err) {
      console.log($scope.link);
      console.log(err);
    })
  }
});
