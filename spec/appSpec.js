var Jasmine = require('jasmine');
var jasmine = new Jasmine();

jasmine.loadConfigFile(process.env.JASMINE_CONFIG_PATH || './spec/support/jasmine.json');
jasmine.loadConfig({
    spec_dir: 'spec',
    spec_files: [
        'appSpec.js',
        '**/*[sS]pec.js'
    ],
    helpers: [
        'helpers/**/*.js'
    ],
    "random": true
});


//jasmine.onComplete(function(passed) {
//    if(passed) {
//        console.log('All specs have passed');
//    }
//    else {
//        console.log('At least one spec has failed');
//    }
//});
jasmine.configureDefaultReporter({
    showColors: true
    , print: function() {
        process.stdout.write(util.format.apply(this, arguments));
    }
});


var myReporter = {
    jasmineStarted: function(suiteInfo) {
        console.log('Running suite with ' + suiteInfo.totalSpecsDefined);
    },
    suiteStarted: function(result) {
        console.log('Suite started: ' + result.description + ' whose full description is: ' + result.fullName);
    },
    specStarted: function(result) {
        console.log('Spec started: ' + result.description + ' whose full description is: ' + result.fullName);
    },
    specDone: function(result) {
        console.log('Spec: ' + result.description + ' was ' + result.status);
        for(var i = 0; i < result.failedExpectations.length; i++) {
            console.log('Failure: ' + result.failedExpectations[i].message);
            console.log(result.failedExpectations[i].stack);
        }
        console.log(result.passedExpectations.length);
    },
    suiteDone: function(result) {
        console.log('Suite: ' + result.description + ' was ' + result.status);
        for(var i = 0; i < result.failedExpectations.length; i++) {
            console.log('AfterAll ' + result.failedExpectations[i].message);
            console.log(result.failedExpectations[i].stack);
        }
    },
    jasmineDone: function() {
        console.log('Finished suite');
    }
};
//jasmine.addReporter(myReporter);



jasmine.execute();