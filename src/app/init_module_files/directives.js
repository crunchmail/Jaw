module.exports = angular.module('jaw.directives', [])


.directive('cmMenu', require('menu/menu.directive'))

.directive('cmFileReader', require('_directives/fileReader.directive'))
.directive('cmStatusLegend', require('_directives/statusLegend.directive'))
.directive('cmDcharts', require('_directives/dcharts.directive'))
.directive('cmDirDateJs', require('_directives/dirDateJs.directive'))
.directive('cmDropDown', require('_directives/dropDown.directive'))
.directive('cmCsvUpload', require('_directives/csvUpload.directive'))
.directive('cmConfirm', require('_directives/confirm.directive'));
