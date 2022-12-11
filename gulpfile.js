const { src, dest, watch } = require('gulp');
const css = require('gulp-sass')(require('sass'));
const jsmin = require('gulp-jsmin');

function compilarCss( done ){
    src('src/scss/**/*.scss')
        .pipe( css() )
        .pipe( dest('build/css'));
    
    done();
}

function minificarJs( done ){
    src('src/js/app.js')
        .pipe( jsmin())
        .pipe( dest('build/js'));

    done();
}

function dev( done ){
    watch('src/scss/**/*.scss', compilarCss)

    done();
}

exports.dev = minificarJs;