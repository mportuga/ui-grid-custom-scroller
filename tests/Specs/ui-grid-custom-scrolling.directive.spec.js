describe('ui.grid.customScroller', function() {
  'use strict';

  describe('uiGridCustomScroller Directive', function() {
    var $compile, $rootScope, $scope, elm;

    beforeEach(function() {
      module('ui.grid');
      module('ui.grid.customScroller');

      inject(function (_$rootScope_, _$compile_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
      });

      $scope = $rootScope.$new();
      $scope.gridOpts = {
        data: [{ name: 'Bob' }, {name: 'Mathias'}, {name: 'Fred'}]
      };

      elm = angular.element('<div ui-grid="gridOpts" ui-grid-custom-scroller></div>');

      $compile(elm)($scope);
      $scope.$digest();
    });

    it('should update the grid options to define a customScroller', function() {
      expect($scope.gridOpts.customScroller).toBeDefined();
      expect(angular.isFunction($scope.gridOpts.customScroller)).toBe(true);
    });
  });
});
