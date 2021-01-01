//利用es6实现stack类，push，pop，peek

class Stack{
    constructor(){
        this.stack = []
    }
    push(item){
        this.stack.push(item)
    }
    pop(){
       return  this.stack.pop()
    }
    peek(){
        return this.stack[this.stack.length-1]
    }
}

let number = 239801;
function binary(num){
    let stack = new Stack()
    while(num > 0 ){
        let rest =  num % 2 
        stack.push(rest)
       
       num = Math.floor( num / 2 ) 
    }
  let result = '' ;
  while(stack.stack.length){
      result += stack.pop()
  }
  return Number(result);
}