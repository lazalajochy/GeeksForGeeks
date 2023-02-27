//----> https://practice.geeksforgeeks.org/problems/node-at-a-given-index-in-linked-list/1?page=1&category[]=Linked%20List&sortBy=difficulty
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
 * @return {number}
*/

class Solution {
    GetNth(head, index) {
        let current = head;
        let i = 1;
        while (current) {
            if (i == index) return current.data
            current = current.next
            i++;

        }
    }
}
