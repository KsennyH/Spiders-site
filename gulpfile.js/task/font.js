const { src, dest } = require('gulp');

//Конфигурация
const path = require("../config/path");
const app = require("../config/app");

//Плагины
const plumber = require('gulp-plumber');
const newer = require('gulp-newer');
const fonter = require('gulp-fonter');
const ttf2woff2 = require('gulp-ttf2woff2');



const font = () => {
    return src(path.font.src)
        .pipe(plumber())
        .pipe(newer(path.font.dest))
        .pipe(fonter(app.fonter))
        .pipe(dest(path.font.dest))
        .pipe(ttf2woff2())
        .pipe(dest(path.font.dest))
}

module.exports = font;