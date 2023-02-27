// ---> https://practice.geeksforgeeks.org/problems/count-nodes-of-linked-list/1?page=1&category[]=Linked%20List&sortBy=submissions
/*class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
    //Function to count nodes of a linked list.
    getCount(head) {
        let items = 0;
        let current = head;
        while (current) {
            current = current.next;
            items++;
        }
        return items;
    }
}