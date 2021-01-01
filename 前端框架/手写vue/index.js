function Vue(options){
    if(this instanceof Vue){
        throw Error('必须通过 new 的方式调用Vue')
    }
    this._init(options)
}