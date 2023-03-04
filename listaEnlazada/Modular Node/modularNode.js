//https://practice.geeksforgeeks.org/problems/modular-node/1?page=1&category[]=Linked%20List&sortBy=difficulty
/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let head;
This is method only submission.
You only need to complete the below method.
*/

class Solution {
    modularNode(head, k) {
        let modular = -1, current = head, index = 1;
        while (current) {
            if (index % k == 0) modular = current.data;
            index++
            current = current.next
        }
        return modular
    }
}