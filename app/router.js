const Router = require('koa-router');
const home = require('./controller/home');
// const list = require('./controller/list');
// const detail = require('./controller/detail');

const router = new Router();

console.log(home.index, 9999)

router.get('/', home.index);
// router.post('/api/detail', detail.index);
// router.get('/api/swiper', list.index);

module.exports = router;
