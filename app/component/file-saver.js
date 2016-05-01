angular.module('exampleApp').component('fileSaver', {
    bindings: {
        jsonFile: '=',
        filename: '<'
    },
    templateUrl: 'component/file-saver.html',
    controller: function () {
        this.canSave = function(){
            return angular.isDefined(this.jsonFile)
        };
        this.saveToPc = function () {
            var data = this.jsonFile;

            if (!data) {
                console.error('No data');
                return;
            }

            if (typeof data === 'object') {
                data = JSON.stringify(data, undefined, 2);
            }

            var blob = new Blob([data], {type: 'text/json'}),
                a = angular.element('<a>')[0];

            a.download = this.filename;
            a.href = window.URL.createObjectURL(blob);
            a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
            a.click();
        };
    }
});
