//---> https://practice.geeksforgeeks.org/problems/delete-node-in-doubly-linked-list/1?page=1&category[]=Linked%20List&sortBy=difficulty
/*
class Node{
    constructor(data){
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}
*/

class Solution {

    deleteNode(head, x) {
        let current = head;
        let index = 1, previous = null;
        console.log(current)
        while (current !== null) {
            if (index == x) {
                if (!previous) {
                    head = current.next
                } else {
                    previous.next = current.next
                }
                return current.data
            }
            previous = current;
            current = current.next
            index++;
        }
    }


}