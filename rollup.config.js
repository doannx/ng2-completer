import uglify from 'rollup-plugin-uglify';

export default {
    entry: 'dist/index.js',
    dest: 'dist/ng2-completer.umd.js',
    format: 'umd',
    moduleName: 'ng2Completer',
    sourceMap: true,
    plugins: [
        uglify()
    ],
    globals: {
        '@angular/core': 'ng.core',
        '@angular/common': 'ng.common',
        '@angular/compiler': 'ng.compiler',
        '@angular/platform-browser': 'ng.platformBrowser',
        '@angular/platform-browser-dynamic': 'ng.platformBrowserDynamic',
        'rxjs/Subject': 'Rx',
        'rxjs/observable/PromiseObservable': 'Rx',
        'rxjs/operator/toPromise': 'Rx.Observable.prototype',
        'rxjs/Observable': 'Rx',
        'rxjs/Rx': 'Rx',

    }
}