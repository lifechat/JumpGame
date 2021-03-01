import Axios from 'axios'
import {serverHost,port} from '../config';


// 创建一个新的实例
let r = Axios.create({
    baseURL:`${serverHost}:${port}/`
});

let request = function(url='',options={}){
    if(url==='')return Promise.reject("必须传入url");
    // 将promise对象返回
    let result = r({
        url,
        method:'get',
        ...options,
    }).then(res=>{
        console.log(res)
    })
    return result;
}

export default request;