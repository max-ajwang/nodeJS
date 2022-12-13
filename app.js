// CommonJS, every file is a module  (by default)
// Modules - encapsulated code, only share the minimum
const names = require('./4-names')
const sayHi = require('./5-utils')

sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)
