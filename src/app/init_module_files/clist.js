var m = angular.module('jaw.clist', []);

// TODO: auto create directives, factory… based on file names:
// use gulp to do generate a "module.js" file before bundle creation
module.exports = angular.module('jaw.clist', [])
.factory('apiClist', require('clist/apiClist.factory'))
.directive('cmClist', require('clist/clist.directive'))
.directive('cmClistList', require('clist/clistList.directive'))
.directive('cmClistContacts', require('clist/clistContacts.directive'))
.directive('cmClistEdit', require('clist/clistEdit.directive'))
//.directive('clist.CreateForm', require('contact/clist.CreateForm'))
.directive('cmClistAddContact', require('clist/clistAddContact.directive'))
.directive('cmClistCopyContact', require('clist/clistCopyContact.directive'))
.directive('cmClistClone', require('clist/clistClone.directive'))
.directive('cmClistMerge', require('clist/clistMerge.directive'))
.directive('cmJawClist', require('clist/clistJaw.directive'))
.directive('cmClistAddProperty', require('clist/clistAddProperty.directive'))
.directive('cmClistImport', require('clist/clistImport.directive'));
