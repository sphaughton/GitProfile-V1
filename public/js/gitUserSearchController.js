githubUserSearch.controller('GitUserSearchController', function($scope, $resource, $http) {

  var searchResource = $resource('https://api.github.com/search/users');

  $scope.doSearch = function() {
    $scope.searchResult = searchResource.get({
      q: $scope.searchTerm,
    }, function(){
      var username = 'https://api.github.com/users/' + $scope.searchTerm;
        $http.get(username).
          success(function(data){
            $scope.username = data
          });
    });

  };

});