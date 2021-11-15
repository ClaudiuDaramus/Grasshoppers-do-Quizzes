const fs = require('fs')
const path = require('path')

const basename = path.basename(__filename);

const mutations = fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && file != basename && (file.slice(-3) === '.js');
  })
  .map((file) => {
      return require(path.join(__dirname, file))
  })
  .reduce((acc, mutation) => {
      return Object.assign(acc, mutation)
  }, {})

module.exports = mutations