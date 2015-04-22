var courseRoster = angular.module('courseRoster', ['ui.router']);

courseRoster.config(function($stateProvider) {
    $stateProvider.state('home', {
        url: '',
        templateUrl: 'partials/home.html'
    });

    $stateProvider.state('courses', {
        url: "/courses",
        templateUrl:"partlials/courses.html",
        controller: 'CoursesCtrl'
    });
});
