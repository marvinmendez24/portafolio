const { src, dest, watch } = require('gulp');
const css = require('gulp-sass')(require('sass'));

function compilarCss( done ){
    src('src/scss/**/*.scss')
        .pipe( css() )
        .pipe( dest('build/css'));
    
    done();
}

function dev( done ){
    watch('src/scss/**/*.scss', compilarCss)

    done();
}

exports.dev = dev;