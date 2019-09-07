// Appveyor current only ships Chrome 72
// which is no longer supported by the latest version of Chromedriver.

const fs = require('fs')
const path = require('path')
const pkg = require('../package.json')

pkg.resolutions.chromedriver = '2.45.0'

fs.writeFileSync(path.resolve(__dirname, '../package.json'), JSON.stringify(pkg, null, 2))
