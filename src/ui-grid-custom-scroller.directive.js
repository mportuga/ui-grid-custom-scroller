/**
 *  @ngdoc directive
 *  @name ui.grid.customScroller.directive:uiGridCustomScroller
 *  @element div
 *  @restrict A
 *
 *  @description Updates the grid to use the gridScroller instead of the jquery scroll event
 *
 *  @example
 <example module="app">
 <file name="app.js">
 var app = angular.module('app', ['ngTouch', 'ui.grid', 'ui.grid.pinning', 'ui.grid.customScroller']);
 app.controller('MainCtrl', ['$scope', '$log', function ($scope, $log) {
      $scope.gridOptions = {};
      $scope.gridOptions.columnDefs = [
        { name:'id', width: 50, enablePinning:false },
        { name:'name', width: 100, pinnedLeft:true },
        { name:'age', width: 100, pinnedRight:true  },
        { name:'address.street', width: 150  },
        { name:'address.city', width: 150 },
        { name:'address.state', width: 50 },
        { name:'address.zip', width: 50 },
        { name:'company', width: 100 },
        { name:'email', width: 100 },
        { name:'phone', width: 200 },
        { name:'about', width: 300 },
        { name:'friends[0].name', displayName:'1st friend', width: 150 },
        { name:'friends[1].name', displayName:'2nd friend', width: 150 },
        { name:'friends[2].name', displayName:'3rd friend', width: 150 },
      ];
      $scope.gridOptions.data = generateData(500);

      function generateData(total) {
      	var data = [];

      	for(var i = 0; i < total; i++) {
      		data.push({
      			id: i+1,
      			name: 'John Doe',
      			age: Math.floor(Math.random() * 70) + 1,
      			address: {
      				street: i + 1 + ' Newbury St.',
      				city: 'Boston',
      				state: 'MA',
      				zip: '02115'
      			},
      			company: 'Newbury Comics',
      			email: 'john.doe@newbury.com',
      			about: 'John has many doppelgangers',
      			friends: [
      				{name: 'Jane Doe'},
      				{name: 'Joe Doe'},
      				{name: 'Jake Doe'}
      			]
      		});
      	}

      	return data;
      }
    }]);
 </file>
 <file name="index.html">
 <div ng-controller="MainCtrl">
 <div ui-grid="gridOptions" class="grid" ui-grid-pinning ui-grid-custom-scroller></div>
 </div>
 </file>
 </example>
 */
angular
	.module('ui.grid.customScroller')
	.directive('uiGridCustomScroller', ['uiGridScroller',
		function(uiGridScroller) {
			return {
				restrict: 'A',
				require: 'uiGrid',
				scope: false,
				compile: function() {
					return {
						pre: function($scope, $elm, $attrs, uiGridCtrl) {
							// initializes custom scroller to be the gridScroller when options exist
							if (uiGridCtrl.grid && uiGridCtrl.grid.options) {
								uiGridCtrl.grid.options.customScroller = uiGridScroller;
							}
						},
						post: angular.noop
					};
				}
			};
		}]);
