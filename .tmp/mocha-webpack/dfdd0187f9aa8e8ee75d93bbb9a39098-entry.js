
    var testsContext = require.context("../../source", false);

    var runnable = testsContext.keys();

    runnable.forEach(testsContext);
    