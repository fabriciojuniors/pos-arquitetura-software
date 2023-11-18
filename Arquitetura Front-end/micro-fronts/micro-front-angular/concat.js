var concat = require('concat-files');
concat([
    './dist/micro-front-angular/runtime.js',
    './dist/micro-front-angular/polyfills.js',
    './dist/micro-front-angular/main.js'
], './dist/app.js', function(err) {
    if (err) throw err
    console.log('done');
});