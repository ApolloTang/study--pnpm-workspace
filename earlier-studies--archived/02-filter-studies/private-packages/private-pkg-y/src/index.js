const pkgJson = require('../package.json')

const dependency = require('@apollotang/local-pkg-c')

let output = `${pkgJson.name}:${pkgJson.version} ---> ${dependency.name}:${dependency.version}`
console.log(output)

module.exports = pkgJson

