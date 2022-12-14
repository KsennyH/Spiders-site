const { src, dest } = require('gulp');

//Конфигурация
const path = require("../config/path");
const app = require("../config/app");

//Плагины
const plumber = require('gulp-plumber');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const webp = require('gulp-webp');
const gulpif = require('gulp-if');



const img = () => {
    return src(path.img.src)
        .pipe(plumber())
        .pipe(newer(path.img.dest))
        .pipe(webp())
        .pipe(dest(path.img.dest))
        .pipe(src(path.img.src))
        .pipe(newer(path.img.dest))
        .pipe(gulpif(app.isProd, imagemin(app.imagemin)))
        .pipe(dest(path.img.dest))
}

module.exports = img;