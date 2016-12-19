module.exports = angular.module('jaw.recipients', [])

.factory('recipientsMessage', require('recipients/recipients.factory'))
.factory('recipientFilter', require('recipients/recipientFilter.factory'))
.factory('apiRecipient', require('recipients/apiRecipient.factory'))

.directive('cmRecipients', require('recipients/recipients.directive'));
