angular.module('exampleApp').component('jsonEditor',{
   templateUrl: 'component/json-editor/json-editor.html',
    bindings:{
        jsonData: '='
    },
    controller: function(){
        this.edit = false;
        this.isEditable = function(){
          return angular.isDefined(this.jsonData);
        };
    }
});
