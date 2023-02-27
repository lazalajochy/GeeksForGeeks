//---> https://practice.geeksforgeeks.org/problems/check-if-linked-list-is-pallindrome/1?page=1&category[]=Linked%20List&sortBy=submissions

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
    //Function to check whether the list is palindrome.
    isPalindrome(head) {
        let current = head;
        let result = [], aux;
        while (current) {
            result.push(current.data);
            current = current.next
        }
        aux = [...result]
        aux = aux.reverse().join('')

        return (aux == result.join('')) ? 1 : 0;

    }

}