Modernizr.load([
    {
        load: [
            'https://ajax.googleapis.com/ajax/libs/angularjs/1.0.5/angular.min.js',
            'components/angular-resource/angular-resource.min.js'
        ],
        complete: function () {
            if ( !angular ) {
                Modernizr.load('components/angular/angular.min.js');
            }
        }
    },
    {
        // This will wait for the fallback to load and
        // execute if it needs to.
        load: 'scripts/app.js',
        complete: function() {
            angular.bootstrap(document, ['mywebapp']);
        }
    }
]);
