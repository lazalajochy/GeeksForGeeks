//https://practice.geeksforgeeks.org/problems/occurence-of-an-integer-in-a-linked-list/1?page=1&category[]=Linked%20List&sortBy=difficulty


/**
 * @param {Node} head
 * @param {number} search_for
 * @returns {number}
*/

class Solution
{
    count(head, search_for)
    {
        //add your code here
        let current = head;
        let count = 0;
        while(current){
            if(current.data === search_for) count++;
            current = current.next
        }
        return count;
    }
};
