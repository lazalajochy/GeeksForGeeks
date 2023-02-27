//----> https://practice.geeksforgeeks.org/problems/print-linked-list-elements/1?page=1&category[]=Linked%20List&sortBy=difficulty
/*LINKED LIST NODE
class Node {
  constructor(x){
    this.data = x;
    this.next = null;
  }
}
*/


/**
 * @param {Node} head
*/

class Solution {
    display(head) {
        let current = head;
        let result = [];
        while (current) {
            result.push(current.data);
            current = current.next
        }
        console.log(result.join(' '))
    }
}