angular.module('app',[]);

angular.module('app').run(function($rootScope,$timeout){
    var __root = $rootScope.__root = {};

    __root.updateCurrntTime = function(){
        __root.currentTime = new Date();
        console.log(__root.currentTime);
        $timeout(__root.updateCurrntTime,1000);
    }


    __root.updateCurrntTime();
})

angular.module('app').config(function(__users){
    console.log(__users);
})



angular.module('app').controller('ctrl1', ['$scope','__foods','__users',function ($scope,__foods,__users) {
    $scope.users = __users;
    $scope.foods = __foods;

    var vm = $scope.vm = {};

    
    vm.selectedOrder = function(){
        
    }

    console.log(__users);
    console.log(__foods);
}])

angular.module('app').controller('ctrl2', function ($scope,__users) {
    $scope.users = __users;
    

    console.log(__users);



})