/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head === null || head.next === null){//头为空或者只有一项；直接返回
        return head 
    }
    let p1 = head;
    p2 = head.next;
    p3 = null;
    while(p2){
        p3 = p2.next;
        p2.next = p1;
        p1 = p2;
        p2 = p3
    }
    head.next = null;
    head = p1;
    return head
};