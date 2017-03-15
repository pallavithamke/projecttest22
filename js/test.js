/**
 * Created by ADMIN on 17-02-2017.
 */
(function() {
    "use strict";

    var app = angular.module("ngtableApp", ["ui.router","ngTable", "ngTableDemos"]);
    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/tablepage');
        $stateProvider
            .state('tablepage', {
                url: '/tablepage',
                templateUrl: 'views/tablepage.html',
                controller: 'demoController'
            })

    }]);

    app.controller("demoController", function(){
        demoController.$inject = ["NgTableParams", "ngTableSimpleMediumList"];
        this.defaultConfigTableParams = new NgTableParams({}, { dataset: simpleList});

        $scope.myValues = [
            { name: "Madhav Sai", age: 10, location: 'Nagpur' },
            { name: "Suresh Dasari", age: 30, location: 'Chennai' },
            { name: "Rohini Alavala", age: 29, location: 'Chennai' },
            { name: "Praveen Kumar", age: 25, location: 'Bangalore' },
            { name: "Sateesh Chandra", age: 27, location: 'Vizag' },
            { name: "Siva Prasad", age: 38, location: 'Nagpur' },
            { name: "Sudheer Rayana", age: 25, location: 'Kakinada' },
            { name: "Honey Yemineni", age: 7, location: 'Nagpur' },
            { name: "Mahendra Dasari", age: 22, location: 'Vijayawada' },
            { name: "Mahesh Dasari", age: 23, location: 'California' },
            { name: "Nagaraju Dasari", age: 34, location: 'Atlanta' },
            { name: "Gopi Krishna", age: 29, location: 'Repalle' },
            { name: "Sudheer Uppala", age: 19, location: 'Guntur' },
            { name: "Sushmita", age: 27, location: 'Vizag' }
        ];
        $scope.tableParams = new ngTableParams({
            page: 1,
            count: 5
        }, {

            getData: function ($defer, params) {

                $scope.data = $scope.data.slice((params.page() - 1) * params.count(), params.page() * params.count());
                $defer.resolve($scope.data);
            }
        });


    });
   
   


});