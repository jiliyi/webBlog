/**
 * @description 频繁触发函数时使用
 * @param {Function} fn 
 * @param {Number} delay
 */
function debounce(fn,delay){
    let timer = null;
    let self = this;
    return function(...args){
        if(timer){
            clearInterval(timer)
        }
        timer = setTimeout(function(){
            fn.apply(self,args)
        },delay)
    }
}