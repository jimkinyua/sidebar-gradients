const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');

// ***********************
// Move JS Files to src/js
// ***********************

gulp.task('js', function () {
    return gulp.src([
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/bootstrap/dist/js/bootstrap.min.js',
      'node_modules/popper.js/dist/umd/popper.min.js',
      'node_modules/owl.carousel2/dist/owl.carousel.min.js',
      'node_modules/wowjs/dist/wow.min.js',
      'node_modules/imagesloaded/imagesloaded.pkgd.min.js',
      'node_modules/isotope-layout/dist/isotope.pkgd.min.js',
      'node_modules/jarallax/dist/jarallax.min.js',
      'node_modules/jarallax/dist/jarallax-video.min.js',
      'node_modules/jquery-waypoints/waypoints.min.js',
      'node_modules/counterup/jquery.counterup.min.js',
      'node_modules/jquery.easing/jquery.easing.min.js',
      'node_modules/jquery-countdown/dist/jquery.countdown.min.js',
      'node_modules/jquery-nice-select/js/jquery.nice-select.min.js',
      'node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js',
      'node_modules/jquery-ui-slider/jquery-ui.min.js',
      'node_modules/bootstrap-table/dist/bootstrap-table.min.js',
      'node_modules/c3/c3.min.js',
      'node_modules/d3/dist/d3.min.js',
      'node_modules/dragula/dist/dragula.min.js',
      'node_modules/dropify/dist/js/dropify.min.js',
      'node_modules/dropzone/dist/min/dropzone.min.js',
      'node_modules/jquery.repeater/jquery.repeater.min.js',
      'node_modules/jquery-form-validator/form-validator/jquery.form-validator.min.js',
      'node_modules/jquery-slimscroll/jquery.slimscroll.min.js',
      'node_modules/ladda/js/ladda.js',
      'node_modules/rmodal/dist/rmodal.min.js',
      'node_modules/spin.js/spin.js',
      'node_modules/sweetalert/dist/sweetalert.min.js',
      'node_modules/bootstrap-tagsinput/dist/bootstrap-tagsinput.min.js',
      'node_modules/typeahead/typeahead.js',
      'node_modules/fullcalendar/dist/fullcalendar.min.js',
      'node_modules/datatables-bootstrap/js/dataTables.bootstrap.min.js',
      'node_modules/validator/validator.min.js',
      'node_modules/jquery-steps/build/jquery.steps.min.js',
      'node_modules/jquery-form-validator/form-validator/jquery.form-validator.min.js',
      'node_modules/bootstrap-table/dist/bootstrap-table.min.js',
      'node_modules/bootstrap-colorpicker/dist/js/bootstrap-colorpicker.min.js'
    ])
        .pipe(gulp.dest("src/js"))
});

// *****************************
// Combine All js files into one
// *****************************

gulp.task('scripts', function () {
    return gulp.src([
    './src/js/default-assets/avoid.console.error.js',
    'node_modules/jquery-slimscroll/jquery.slimscroll.min.js',
    './src/js/default-assets/treemenu.js',
    'node_modules/owl.carousel2/dist/owl.carousel.min.js',
    'node_modules/jquery.easing/jquery.easing.min.js',
    'node_modules/wowjs/dist/wow.min.js',
    'node_modules/jquery-waypoints/waypoints.min.js',
    'node_modules/counterup/jquery.counterup.min.js',
    'node_modules/imagesloaded/imagesloaded.pkgd.min.js',
    'node_modules/isotope-layout/dist/isotope.pkgd.min.js',
    'node_modules/jarallax/dist/jarallax.min.js',
    'node_modules/jarallax/dist/jarallax-video.min.js',
    'node_modules/jquery-countdown/dist/jquery.countdown.min.js',
    'node_modules/jquery-nice-select/js/jquery.nice-select.min.js',
    'node_modules/jquery-ui-slider/jquery-ui.min.js'
  ])
        .pipe(concat('ecaps.bundle.js'))
        .pipe(gulp.dest('./src/js/'))
});

// ************************************
// Move Font Awesome Fonts to src/fonts
// ************************************

gulp.task('fafonts', function () {
    return gulp.src([
      'node_modules/font-awesome/fonts/*'
    ])
        .pipe(gulp.dest('src/fonts'))
})

// *******************************
// Move Elegent Icons to src/fonts
// *******************************
gulp.task('elefonts', function () {
    return gulp.src([
      'node_modules/elegant-icons/fonts/*'
    ])
        .pipe(gulp.dest('src/css/fonts'))
})

// ****************************
// Move ZMDI Icons to src/fonts
// ****************************
gulp.task('zmdifonts', function () {
    return gulp.src([
      'node_modules/material-design-iconic-font/dist/fonts/*'
    ])
        .pipe(gulp.dest('src/fonts'))
})

// ****************************
// Move ZMDI Icons to src/fonts
// ****************************
gulp.task('pe7icons', function () {
    return gulp.src([
      'node_modules/pe7-icon/dist/fonts/*'
    ])
        .pipe(gulp.dest('src/fonts'))
})

// *******************************
// Move Et-line Icons to src/fonts
// *******************************
gulp.task('etline', function () {
    return gulp.src([
      'node_modules/et-line/fonts/*'
    ])
        .pipe(gulp.dest('src/etline/fonts'))
})

// *******************
// Move CSS to src/css
// *******************

gulp.task('css', function () {
    return gulp.src([
      'node_modules/bootstrap/dist/css/bootstrap.min.css',
      'node_modules/font-awesome/css/font-awesome.min.css',
      'node_modules/owl.carousel2/dist/assets/owl.carousel.min.css',
      'node_modules/elegant-icons/style.css',
      'node_modules/wowjs/css/libs/animate.css',
      'node_modules/jquery-nice-select/css/nice-select.css',
      'node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css',
      'node_modules/jquery-ui-slider/jquery-ui.min.css',
      'node_modules/bootstrap-table/dist/bootstrap-table.min.css',
      'node_modules/c3/c3.min.css',
      'node_modules/dragula/dist/dragula.min.css',
      'node_modules/dropify/dist/css/dropify.min.css',
      'node_modules/dropzone/dist/min/dropzone.min.css',
      'node_modules/ladda/dist/ladda-themeless.min.css',
      'node_modules/spin.js/spin.css',
      'node_modules/material-design-iconic-font/dist/css/material-design-iconic-font.min.css',
      'node_modules/pe7-icon/dist/dist/pe-icon-7-stroke.min.css',
      'node_modules/fullcalendar/dist/fullcalendar.min.css',
      'node_modules/bootstrap-table/dist/bootstrap-table.min.css',
      'node_modules/bootstrap-colorpicker/dist/css/bootstrap-colorpicker.min.css',
    ])
        .pipe(gulp.dest('src/css'))
})

// *********************
// Etline CSS to src/css
// *********************
gulp.task('etlinecss', function () {
    return gulp.src([
        'node_modules/et-line/style.css'
    ])
        .pipe(gulp.dest('src/etline'))
})

// ********************
// SASS to CSS Convert
// ********************
gulp.task('sass', function () {
    return gulp.src('src/scss/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('src/'))
});

gulp.task('sass:watch', function () {
    gulp.watch('src/scss/*.scss', ['sass'])
});

gulp.task('default', ['js', 'scripts', 'css', 'fafonts', 'elefonts', 'zmdifonts', 'pe7icons', 'etlinecss', 'etline', 'sass', 'sass:watch']);