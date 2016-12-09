(function() {
	'use strict';

	/**
	 *  @ngdoc object
	 *  @name ui.grid.customScroller.constant:uiGridScrollerConstants
	 *
	 *  @description Constants for use with the  uiGridScroller
	 */
	angular
		.module('ui.grid.customScroller')
		.constant('uiGridScrollerConstants', {
		/**
		 * @ngdoc object
		 * @name deceleration
		 * @propertyOf ui.grid.customScroller.constant:uiGridScrollerConstants
		 * @description Used in {@link ui.grid.customScroller.service:uiGridScroller#momentum uiGridScroller.momentum}
		 * to calculates current momentum of the scrolling.
		 */
		deceleration: 0.0007,

		/**
		 * @ngdoc object
		 * @name scrollType
		 * @propertyOf ui.grid.customScroller.constant:uiGridScrollerConstants
		 * @description Used in {@link ui.grid.customScroller.service:uiGridScroller uiGridScroller},
		 * to the type of scroll event currently in progress
		 *
		 * Available options are:
		 * - `uiGridScrollerConstants.scrollEvent.NONE` - set when no scroll events are being triggered
		 * - `uiGridScrollerConstants.scrollEvent.TOUCHABLE` - set when touchstart, touchmove or touchend are triggered
		 * - `uiGridScrollerConstants.scrollEvent.MOUSE` - set when mousedown, mousemove or mouseup are triggered
		 * - `uiGridScrollerConstants.scrollEvent.POINTER` - set when pointerdown, pointermove or pointerup are triggered
		 */
		scrollType: {
			NONE: 0,
			TOUCHABLE: 1,
			MOUSE: 2,
			POINTER: 3
		}
	});
})();
