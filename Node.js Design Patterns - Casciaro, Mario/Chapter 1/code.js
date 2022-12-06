function createFileReader(filename) {
  var listeners = [];
  inconsistentRead(filename, function (value) {
    listeners.forEach(function (listener) {
      listener(value);
    });
  });
  return {
    onDataReady: function (listener) {
      listeners.push(listener);
    }
  };
}

var reader1 = createFileReader('data.txt');
reader1.onDataReady(function (data) {
  console.log('First call data: ' + data);
  // ...sometime later we try to read again from
  // the same file
  var reader2 = createFileReader('data.txt');
  reader2.onDataReady(function (data) {
    console.log('Second call data: ' + data);
  });
});


function loadModule(filename, module, require) {
  var wrappedSrc =
  '(function(module, exports, require) {' +
  fs.readFileSync(filename, 'utf8') +
  '})(module, module.exports, require);';
  eval(wrappedSrc);
}

var require = function (moduleName) {
  console.log('Require invoked for module: ' + moduleName);
  var id = require.resolve(moduleName); // [1]
  if (require.cache[id]) { // [2]
    return require.cache[id].exports;
  }
  // module metadata
  var module = { // [3]
    exports: {},
    id: id
  };

  // Update the cache
  require.cache[id] = module; // [4]
  // load the module
  loadModule(id, module, require); // [5]

  // return exported variables
  return module.exports; // [6]
};

// load another dependency
var dependency = require('./anotherModule');
// a private function
function log() {
  console.log('Well done ' + dependency.username);
}
// the API to be exported for public use
module.exports.run = function () {
  log();
};

require.cache = {};
require.resolve = function (moduleName) {
  /* resolve a full module id from the moduleName */
};
