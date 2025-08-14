module.exports = {
  default: {
    import: [
      'hooks/hooks.js',
      'steps/**/*.js'
    ],
    format: ['progress', 'json:reports/cucumber-report.json'],
    paths: ['features/**/*.feature'],
    publishQuiet: true
  }
};