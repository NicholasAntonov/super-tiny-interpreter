var superTinyInterpreter = require('./super-tiny-interpreter');
var assert            = require('assert');

var interpreter   = superTinyInterpreter.interpreter;

var input  = '[3 + 5, null == undefined]';
var output = [8, true];

assert.deepStrictEqual(interpreter(input), output, 'Interpreter should interpret the code correctly');

console.log('All Passed!');