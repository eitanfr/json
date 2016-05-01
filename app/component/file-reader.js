angular.module('exampleApp').component('fileReader', {
    bindings: {
        jsonFile: '=',
        filename: '='
    },
    templateUrl: 'component/file-reader.html',
    controller: function ($scope) {
        this.filename = 'No file was selected';
        var $ctrl = this;
        this.$postLink = function () {
            angular.element(angular.element.find('input')).bind("change", function (changeEvent) {
                var reader = new FileReader();
                reader.onload = function (loadEvent) {
                    $scope.$apply(function () {
                        $ctrl.jsonFile = JSON.parse(loadEvent.target.result);
                    });
                };
                $ctrl.filename = changeEvent.target.files[0].name;
                reader.readAsText(changeEvent.target.files[0])
            });
        }
    }
});
