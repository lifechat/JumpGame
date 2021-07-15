import kxios from './Kxios';
import Kxios from './Kxios/kxios';

console.log(kxios);

// kxios.defaults.method = 'post';
kxios.get('http://localhost:9999/')
.then(res =>{
     console.log('kxios = res',res);
});

// let api1 = new Kxios({
//     baseurl:'http://localhost:9999/'
// });

// api1.get('/data');

// let api2 = new Kxios({
//     baseurl:'http://localhost:8888',
//     method:'get'
// });

// api1({
//     url:'/login',

// })