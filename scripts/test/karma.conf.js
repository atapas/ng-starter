module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],

        files:[
        '../../bower_components/angular/angular.js',

        '../../bower_components/angular-upload/angular-upload.js',

        '../../bower_components/angular-smart-table/dist/smart-table.js',

        

		'../../bower_components/angular-route/angular-route.js',

        '../../bower_components/angular-resource/angular-resource.js',
        
        '../../node_modules/angular-mocks/angular-mocks.js',

        '../../bower_components/angular-bootstrap/ui-bootstrap.js',
        
        './../build/**/*.js',

        './*.test.js'],

        autoWatch : true,

        plugins : [
            'karma-jasmine',
            'karma-coverage',
            'karma-junit-reporter',
            'karma-spec-reporter'
        ],

        junitReporter : {
      		outputFile: 'test_out/unit.xml',
      		suite: ''
    	},

        preprocessors: {
  			'./*.test.js': 'coverage'
		},

		reporters: ['spec','junit','coverage'],

		coverageReporter: {
  			type : 'html',
  			dir : 'coverage/'
		}
        
    });
};