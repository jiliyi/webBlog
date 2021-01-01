function isObject(obj){
    return Object.prototype.toString.call(obj)
}

function isEqual(obj1,obj2){

    //如果两个至少有一个不是对象，则直接比较是否相等
    if(!isObject(obj1) || !isObject(obj2)){
        return obj1 === obj2
    }
    
    let keys1 = Object.keys(obj1)
    let keys2 = Object.keys(obj2)
    if(keys1.length !== keys2.length){
        return false//长度不等，则不等
    }
    for(let key in obj1){
        if(isObject(obj1[key]) && isObject(obj2[key])){//两者都是对象
            isEqual(obj1[key],obj2[key])
        }else if(!isObject(obj1[key]) && !isObject(obj2[key])){//两者都不是对象
            if(obj1[key] != obj2[key]){
                return false
            }
        }else{
            return false
        }
    }
    return true
}