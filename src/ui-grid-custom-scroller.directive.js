(function() {
	'use strict';

	/**
	 *  @ngdoc directive
	 *  @name ui.grid.customScrolling.directive:uiGridCustomScrolling
	 *  @element div
	 *  @restrict EA
	 *
	 *  @description Updates the grid to use the gridScroller instead of the jquery scroll event
	 *
	 *  @example
	 <example module="app">
	 <file name="app.js">
	 var app = angular.module('app', ['ngTouch', 'ui.grid', 'ui.grid.pinning', 'ui.grid.customScrolling']);
	 app.controller('MainCtrl', ['$scope', '$http', '$log', function ($scope, $http, $log) {
      $scope.gridOptions = {};
      $scope.gridOptions.columnDefs = [
        { name:'id', width:50, enablePinning:false },
        { name:'name', width:100, pinnedLeft:true },
        { name:'age', width:100, pinnedRight:true  },
        { name:'address.street', width:150  },
        { name:'address.city', width:150 },
        { name:'address.state', width:50 },
        { name:'address.zip', width:50 },
        { name:'company', width:100 },
        { name:'email', width:100 },
        { name:'phone', width:200 },
        { name:'about', width:300 },
        { name:'friends[0].name', displayName:'1st friend', width:150 },
        { name:'friends[1].name', displayName:'2nd friend', width:150 },
        { name:'friends[2].name', displayName:'3rd friend', width:150 },
      ];
      $http.get('/data/500_complex.json')
        .success(function(data) {
          $scope.gridOptions.data = data;
        });
    }]);
	 </file>
	 <file name="index.html">
	 <div ng-controller="MainCtrl">
	 <div ui-grid="gridOptions" class="grid" ui-grid-pinning ui-grid-custom-scrolling></div>
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
})();
