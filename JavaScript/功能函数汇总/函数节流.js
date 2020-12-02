//每隔一段时间再执行一次函数delay
function throttle(fn,delay){
    let prevTime = 0;
    let self = this;
    return function(...args){
        let nowTime = +new Date();
        if(nowTime - prevTime >= delay){
            fn.apply(self,args)
        }
        prevTime = nowTime;
    }
}