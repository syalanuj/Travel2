(function () {
    'use strict';
    var app = angular.module('campture');
    app.config(function ($httpProvider, $routeProvider, $locationProvider) {
        // attach our auth interceptor to the http requests
        //$httpProvider.interceptors.push('AuthInterceptor');
        $routeProvider

    .when('/', {
        controller: 'LandingCtrl',
        templateUrl: 'app/components/landing/landing.html'
    })
    .when('/tourdetails/:param', {
        controller: 'TourDetailsCtrl',
        templateUrl: 'app/components/tourDetails/tourDetails.html'
    })
    .when('/activities/', {
            controller: 'MainCategoriesCtrl',
            templateUrl: 'app/components/mainCategories/activities.html'
        })
    .when('/travelstyles/', {
            controller: 'MainCategoriesCtrl',
            templateUrl: 'app/components/mainCategories/travelStyles.html'
        })
    .when('/states/', {
            controller: 'MainCategoriesCtrl',
            templateUrl: 'app/components/mainCategories/states.html'
        })
    .when('/availabletours/:filtercategory/:id', {
            controller: 'AvailableToursCtrl',
            templateUrl: 'app/components/mainCategories/states.html'
        })
        .when('/account/timeline/:tripId', {
            controller: 'TimelineCtrl',
            templateUrl: 'app/components/account/timeline/timeline.html'
        })
        .when('/account/postTrip/', {
            controller: 'PostTripCtrl',
            templateUrl: 'app/components/account/postTrip/postTrip.html'
        })
        .when('/account/newsFeed/', {
            controller: 'AccountCtrl',
            templateUrl: 'app/components/account/newsFeed.html'
        })
        .when('/account/profile/:userId', {
            controller: 'ProfileCtrl',
            templateUrl: 'app/components/account/profile/profile.html'
        })
        .when('/account/signIn/', {
            templateUrl: 'app/components/account/signIn.html'
        })
        .when('/account/editTrip/:tripId', {
             controller: 'EditTripCtrl',
            templateUrl: 'app/components/account/editTrip/editTrip.html'
        });
    });

})();
