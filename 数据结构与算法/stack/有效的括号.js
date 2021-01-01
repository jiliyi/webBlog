//  题目描述： 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。


//解题思路：1处理特殊情况：空串，长度不为偶数；2利用栈后进先出的特点解决问题
//3 出现左括号时入栈 比较出现右括号时是否与左侧括号对应。
//4最后栈的长度如果为0，则有效，否则无效。
var isValid = function(s) {
    if(s.trim() === ''){
        return true; //字符串是有效字符串
    }
    if(s.length%2 !== 0){
        return false//长度为奇数，无效
    }
    let strLeft = '({[';
    let strRight = ')}]'
    let arr = []
    if(strRight.includes(s[0])){//第一个字符串出现由边括号相关内容，无效
        return false
    }
    for(let i = 0 ; i < s.length;i++){
        if(strLeft.includes(s[i])){//出现左括号入栈
            arr.push(s[i])
        }else if(strRight.includes(s[i]) ) {//出现右括号比较是否与左括号对应。
            if( strLeft.indexOf( arr[arr.length - 1]) === strRight.indexOf(s[i])){
            arr.pop()
            }else {
                return false
            }
        }
    }
    if(arr.length === 0){
        return true
    }
    return false
};
