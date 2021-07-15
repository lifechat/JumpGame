const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function MyPromise(fn){
    const _that = this;
    _that.state = PENDING;
    _that.value = null;
    _that.resovedCallbacks = []
    _that.rejectedCallbacks = []
}

function pending(){

}

function resove(value){
    if(_that.state === PENDING){
        _that.state = RESOLVED;
        _that.value = value;
        _that.resovedCallbacks.map(cb => cb(_that.value))
    }
}
function reject(value){
    if(_that.state === PENDING){
        _that.state = REJECTED;
        _that.value = value;
        _that.rejectedCallbacks.map(cb => cb(_that.value))
    }
}


MyPromise.prototype.then = (onFulfilled,onRejected)=>{
    const _that = this;
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
    onRejected = 
     typeof onRejected === 'function'
     ? onRejected
     : r => {
         throw r
     }

     if(_that.state === PENDING){
         _that.resovedCallbacks.push(onFulfilled);
         _that.rejectedCallbacks.push(onRejected);
     }
     if(_that.state === RESOLVED){
         onFulfilled(_that.value)
     }
     if(_that.state === REJECTED){
         onRejected(_that.value);
     }
}