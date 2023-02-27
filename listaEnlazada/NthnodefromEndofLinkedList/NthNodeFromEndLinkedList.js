//----> https://practice.geeksforgeeks.org/problems/nth-node-from-end-of-linked-list/1?page=1&category[]=Linked%20List&sortBy=submissions

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
    //Function to find the data of nth node from the end of a linked list
    getNthFromLast(head, n) {
        let current = head;
        let arr = [];
        while (current) {
            arr.push(current.data);
            current = current.next;
        }

        arr = arr.reverse();
        if (n > arr.length) return
        return arr[n - 1]
    }

}