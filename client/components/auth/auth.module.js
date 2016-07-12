'use strict';

angular.module('puzlApp.auth', [
  'puzlApp.constants',
  'puzlApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
