import {deepcopy} from './utils'




let obj1 = {
    baseurl:'',
    url:'',
    method:'get'
}

let obj2 = deepcopy(obj1);

obj2.url = 'abc'
console.log(obj1);
class Kxios{

    constructor(config){
        this.defaults = config;
    }
   get(url){
    return new Promise((resolve,reject)=>{
        let xhr = new XMLHttpRequest();

        xhr.onload = function(){
              resolve(xhr.responseText)
        };
        xhr.open('get',url,true);
 
        xhr.send();
    })
   }
}
export default Kxios;