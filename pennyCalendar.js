var app = angular
    .module("pennyModule", [])
    .controller("calendarController", function($scope) {
        $scope.months = [
            {name: "January", days: 31, runningTotalDays: 0},
            {name: "February", days: 29, runningTotalDays: 31},
            {name: "March", days: 31, runningTotalDays: 60},
            {name: "April", days: 30, runningTotalDays: 91},
            {name: "May", days: 31, runningTotalDays: 121},
            {name: "June", days: 30, runningTotalDays: 152},
            {name: "July", days: 31, runningTotalDays: 182},
            {name: "August", days: 31, runningTotalDays: 213},
            {name: "September", days: 30, runningTotalDays: 244},
            {name: "October", days: 31, runningTotalDays: 274},
            {name: "November", days: 30, runningTotalDays: 305},
            {name: "December", days: 31, runningTotalDays: 335}
        ];

        $scope.selectedMonth = {
            name: "January",
            dayNumber: 1,
            totalDays: 0,
            daysInMonth: function(){
                var numOfDays = 0;
                for (var i = 0; i < $scope.months.length; i++){
                    if ($scope.selectedMonth.name == $scope.months[i].name){
                        $scope.selectedMonth.totalDays = $scope.months[i].runningTotalDays + $scope.selectedMonth.dayNumber;
                        return $scope.months[i].days;
                    }
                }
            },
            calcMoney: function() {
                //(n(n + 1))/2
                var totalPennies = (($scope.selectedMonth.totalDays * ($scope.selectedMonth.totalDays + 1))/2);
                return totalPennies/100;
            },
            calcDepositedToday: function() {
                var totalPennies = ($scope.selectedMonth.totalDays);
                return totalPennies/100;
            }
        }
    });