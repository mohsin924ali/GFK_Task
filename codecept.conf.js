exports.config = {
  tests: './GFK/test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost',
      show: true,
      windowSize: '1900x1150'
    },
    REST: {
      endpoint: 'http://dummy.restapiexample.com/'
    },
    JSONResponse: {}
       
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'test'
}