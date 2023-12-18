var _user = JSON.parse(localStorage.getItem("user"));
var app = angular.module('AppBanHang', []);
app.controller("SanPhamCtrl", function ($scope, $http) {

    $scope.listSanPham;

    $scope.LoadSanPham = function () {
        $http({
            method: 'GET',
            url: 'https://localhost:7252/api/doan/GetAllProduct',
        }).then(function (response) {
            $scope.listSanPham = response.data.result;
        });
    };

    $scope.LoadSanPham();
});
