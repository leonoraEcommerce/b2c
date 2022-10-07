// Adiciona os modulos instalados
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

// Funçao para compilar o SASS e adicionar os prefixos
function compilaSass() {
    return gulp
        .src('_source/styles/styles.scss')
        .pipe(concat('laures_leonoraB2C_frontEnd-min.css'))
        .pipe(
            sass({
                outputStyle: 'compressed',
            }),
        )
        .pipe(
            autoprefixer({
                cascade: false,
            }),
        )
        .pipe(gulp.dest('dist/'));
}
// _source / SCSS Files
gulp.task('sass', function (done) {
  compilaSass();
  done();
});

// _source / JS Files
function gulpJS() {
    return gulp
        .src([
            '_source/scripts/partials/utilities.js',
            '_source/scripts/components/c_toggleList.js',
            '_source/scripts/components/c_responsiveGrid.js',
            '_source/scripts/components/c_smartMenu.js',
            '_source/scripts/components/c_animationCarnaval.js',
            '_source/scripts/components/c_animationButtonFeatured.js',
            '_source/scripts/components/c_countdown.js',
            '_source/scripts/components/c_transportRuler.js',
            '_source/scripts/components/e-product-bar.js',
            '_source/scripts/components/shelf-item.js',
            '_source/scripts/layout/search-banner.js',
            '_source/scripts/sections/sSliderFeaturedCategories.js',
            '_source/scripts/sections/product-info.js',
            '_source/scripts/landPages/lp__default.js',
            '_source/scripts/landPages/lp_domBosco.js',
            '_source/scripts/landPages/lp_leotack.js',
            '_source/scripts/landPages/lp_letron.js'
        ])
        .pipe(concat('laures_leonoraB2C_frontEnd-min.js'))
        .pipe(
            babel({
                presets: ['@babel/preset-env'],
            }),
        )
        .pipe(uglify())
        .pipe(gulp.dest('dist/'));
}
gulp.task('mainjs', gulpJS);

// Libraries / Plugins
function pluginJS() {
    return gulp
        .src([
            '_source/libraries/isjs/is.min.js',
            '_source/libraries/enllax/jquery.enllax.min.js',
            //'_source/libraries/_forms/forms.min.js',
            '_source/libraries/fancybox/jquery.fancybox.min.js',
            // '_source/libraries/slick/slick.js',
        ])
        .pipe(concat('laures_leonoraB2C_frontEndLibs-min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/'));
}
gulp.task('pluginjs', pluginJS);
function pluginCSS() {
    return gulp
        .src([
            '_source/libraries/fancybox/jquery.fancybox.min.css',
            // '_source/libraries/swiper/swiper.min.css',
            // '_source/libraries/select2/dist/css/select2.min.css',
            // '_source/libraries/slick/slick.css',
            // '_source/libraries/slick/slick-theme.css',
        ])
        .pipe(concat('laures_leonoraB2C_frontEndLibs-min.css'))
        .pipe(gulp.dest('dist/'));
}
gulp.task('plugincss', pluginCSS);


// Função de watch do Gulp
function watch() {
  gulp.watch('_source/styles/**/*.scss', compilaSass);
  gulp.watch('_source/scripts/**/*.js', gulpJS);
  gulp.watch('_source/libraries/**/*.js*', pluginJS);
  gulp.watch('_source/libraries/**/*.css*', pluginCSS);
}

// Inicia a tarefa de watch
gulp.task('watch', watch);

// Tarefa padrão do Gulp, que inicia o watch e o browser-sync
gulp.task(
  'default',
  gulp.parallel('watch', 'sass', 'mainjs', 'pluginjs', 'plugincss'),
);
