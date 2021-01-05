function getNameSpace(nowSpace,nowProp){
    if(!nowProp){
        return nowSpace
    }else if(!nowSpace){
        return nowProp
    }else{
        return nowSpace + '.' + nowProp
    }
}
function constructObj(vm,obj,namespace){//实现对象代理
    let proxyObj = {}
    for(let prop in obj){
        Object.defineProperty(proxyObj,prop,{
            configurable: true,
            get(){
                return obj[prop]
            },
            set(val){
                console.log(getNameSpace(namespace,prop))
                obj[prop] = val
            }
        })
        Object.defineProperty(vm,prop,{
            configurable : true,
            get(){
                return obj[prop]
            },
            set(val){
                console.log(`${prop}的值改变了`)
                obj[prop] = val
            }
        })
    
    if(obj[prop] instanceof Object){//如果是对象
        proxyObj[prop] = constructProxy(vm,obj[prop],getNameSpace(namespace,prop))
    }
    }
    return proxyObj
}

//实现代理
//vm表示Vue实例，obj表示要代理的对象，namespace命名空间
export function constructProxy(vm,obj,namespace){
    //递归
    let proxyObj = null
    //先判断obj是数组还是对象，其他的情况不考虑
    if(obj instanceof Array){//数组

    }else if(obj instanceof Object){//对象
        proxyObj = constructObj(vm,obj,namespace)
    }
    return proxyObj
}