angular.module('exampleApp').component('jsonViewer',{
   bindings:{
       jsonData: '=',
       showEdit: '='
   },
    templateUrl: 'component/json-viewer.html',
    //template: '<h1>ok</h1>',
    controller: function(){
        this.$onInit = function(){
            console.log("asds");
        }
    }
});
