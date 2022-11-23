const { src, dest } = require('gulp');

//Конфигурация
const path = require("../config/path");
const app = require("../config/app");

//Плагины


const swiper = () => {
    return src([path.swipercss.src, path.swiperjs.src])
        .pipe(dest(path.swipercss.dest))
}

module.exports = swiper;