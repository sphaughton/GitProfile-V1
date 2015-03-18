githubUserSearch.controller('GitUserSearchController', function($scope, $resource) {

  var searchResource = $resource('https://api.github.com/search/users');
  var key = key;

  $scope.doSearch = function() {
    
    $scope.searchResult = searchResource.get({
      q: $scope.searchTerm,
      access_token: key
    });

  };

});