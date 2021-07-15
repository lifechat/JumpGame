function deepCopy(){
   let target = Array.isArray(source)?[]:{};
    
   for (let key in source) {
       if (source.hasOwnProperty(key)) {
            if(typeof source[key] === 'object' && source !== null){
                target[key] = deepCopy(source[key]);
            }else{
                target[key] = source[key];
            }           
       }
   }
   return target;
}

export {deepCopy as default};
