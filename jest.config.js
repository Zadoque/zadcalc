module.exports = {
  reporters: [
    'default',
    ['jest-html-reporter', {
      pageTitle: 'Zadcalc Test Report',
      outputPath: 'test-report.html',
      includeFailureMsg: true,
      includeConsoleLog: true,
      sort: 'status'
    }]
  ]
};
