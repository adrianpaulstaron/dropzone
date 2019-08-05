// chokidar est required ici et non dans Dropzone.js
// car le watcher doit être instancié dans le mainProcess d'Electron,
// et non dans le rendererProcess.
const chokidar = require('chokidar')

let directoryWatcher = chokidar.watch('./FHIR', {
    ignored: /[/\\]\./,
    persistent: true
})

exports.directoryWatcher = directoryWatcher