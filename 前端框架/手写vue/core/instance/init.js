//1初始化data
import {constructProxy} from './proxy.js'
let count = 0
function initMixin(Vue){//初始化工作
    Vue.prototype._init = function(options){
        const vm  = this;
        vm._uid = count++;
        vm._isVue = true
        if(options && options.data){//初始化data,严谨性判断
            vm._data = constructProxy(vm,options.data,'')
        }
    }
}
export default initMixin