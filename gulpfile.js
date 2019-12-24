// series - метод для реализации последовательности тасков
const { src, dest, task, series, watch} = require('gulp');
const rm = require('gulp-rm');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const gcmq = require('gulp-group-css-media-queries'); /*группировка медиа-запросов*/
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const gulpif = require('gulp-if');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload
const sassGlob = require("gulp-sass-glob");
const svgo = require("gulp-svgo");
const svgSprite = require("gulp-svg-sprite");
const env = process.env.NODE_ENV;

// указываем в качестве компилятора именно Node.js
sass.compiler = require('node-sass');


// таски ==============================================================
task('clean', () => {
    return src("dist/**/*", "!dist/images/icons/map-marker.svg", {read: true}).pipe(rm());
});

// task ('copy:scss', () => {
//     return src('src/styles/main.scss').pipe(dest('dist'));
// });
task ('copy:html', () => {
    return src('src/*.html').pipe(dest('dist')).pipe(reload({stream: true}));
});
task ('copy:fonts', () => {
    return src('src/fonts/*.woff2').pipe(dest('dist/fonts')).pipe(reload({stream: true}));
});
task ('copy:video', () => {
    return src('src/video/*.mp4').pipe(dest('dist/video')).pipe(reload({stream: true}));
});
task ('copy:png', () => {
    return src('src/img/**/*.png').pipe(dest('dist/images/png')).pipe(reload({stream: true}));
});
task ('copy:img', () => {
    return src('src/img/**/*.jpg').pipe(dest('dist/images/jpg')).pipe(reload({stream: true}));
});

task('server', () => {
    browserSync.init({
        server: {
            baseDir: "./dist"
        },
        open: true
    });
});


// таск для компиляции css 
/*массив styles это один из подходов хранить все файлы стилей, потому что часто прийдётся подмешивать к
твоим стилям какие-то сторонние */ 
const styles = [
    'node_modules/normalize.css/normalize.css',
    // в мэйн подключены все остальные scss через импорт поэтому нет смысла следить за всеми
    'src/styles/main.scss'
]

task('styles', () => {
    return src(styles)
    .pipe(gulpif(env==='dev', sourcemaps.init()))
    .pipe(concat('main.min.scss'))
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulpif(env==='prod',
        autoprefixer({
            // каскад отбивает пробелами название свойства от его префиксов
          cascade: false
    })))
    .pipe(gulpif(env==='prod', gcmq()))
    .pipe(gulpif(env==='prod', cleanCSS()))
    .pipe(gulpif(env==='dev', sourcemaps.write('')))
    .pipe(dest('dist'))
    .pipe(reload({ stream: true}));
});

const libs = [
    // 'node_modules/jquery/dist/jquery.js',
    'src/js/*.js'
]

task('scripts', () => {
    return src(libs)
    .pipe(sourcemaps.init())
    .pipe(concat('main.min.js', {newLine: ";"}))
    /*.pipe(
        babel({
            presets: ['@babel/env']
        })
    )  */
    // .pipe(gulpif(env==='prod', uglify()))
    .pipe(sourcemaps.write(''))
    .pipe(dest('dist'))
    .pipe(reload({ stream: true}));
});

task('icons', () => {
    return src("src/icons/*.svg", "!src/icons//map-marker.svg")
    .pipe(
        svgo({
            plugins: [
                {
                    removeAttrs: { attrs: "(|data.*)" }
                }
            ]
        })
    )
    .pipe(svgSprite({
        mode: {
            symbol: {
                sprite: "../sprite.svg"
            }
        }
    }))
    .pipe(dest("dist/images/icons"));
});

// вотчеры следят за изменениями в файлах, когда запустишь npm run gulp процесс не завершится а будет следить за изм.
watch('./src/styles/**/*.scss', series("styles"));
watch('./src/*.html', series('copy:html'));
watch('./src/js/**/*.js', series('scripts'));
// watch('./src/images/icons/*.svg', series('icons'));

// таск дефолт чтобы не путаться что за чем, он запускается при npm run gulp
task('default',
 series(
     "clean",
     "copy:html",
     'styles',
     'scripts',
     "icons", /* сгенерировать svg спрайт */
     'copy:fonts',
     'copy:video',
     'copy:png',
     'copy:img',
    //   "server"
      ));