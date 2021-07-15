import axios from 'axios';
import kxios from './Kxios';

console.log(kxios)
axios.get('http://localhost:9999/')
.then(res =>{
    console.log('axios = res',res);
}
)