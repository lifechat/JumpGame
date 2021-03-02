import request from '../utils/request';
import {routerRedux} from 'dva/router';

let teacher = {
    namespace:'teacher',
    state:{
        isLogin:false
    },
    effects:{
        // 异步action
        *doLogin({payload},{select,put,call}){
            let res = yield call(request('/sigin',{
                method:"post",
                data:payload,
            }))
            if(res.data.errcode !=0){
                return alert("用户名或者密码不正确")
            }
            // 本地的session存储localStorage
            window.sessionStorage.setItem('user',JSON.stringify);

            yield put({type:'changeLogin',payload:{isLogin:true}});

            yield put(routerRedux.push('/home/list'));
        }
    },
    reducer:{
        changeLogin(state,{payload}){
            return {
                isLogin:payload.isLogin
            }
        }
    }
}

export default teacher;