FacebookApp.controller('FriendController', function ($scope, $http){
	var url = 'https://s3.amazonaws.com/intuiplan_company_files/production/files/public/FriendData.json?callback=JSON_CALLBACK';
	$http.get(url).success(function(data) {
		
		console.log(data);
		$scope.friends = data.results;
		
	});
$scope.searchname = '';
$scope.searchlocation = '';

$scope.dropFilter = 'name';
$scope.sortOrder = 'false';

});




