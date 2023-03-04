Given a singly linked list and a number k, you are required to complete the function modularNode() which returns the modular node of the linked list.
A modular node is the last node of the linked list whose Index is divisible by the number k, i.e. i%k==0.
Note: If no such node is available, return -1. We are following 1 indexing.

Example 1:


Input: LinkedList: 1->2->3->4->5->6->7

       k = 3
       
Output: 6

Explanation: Indexing of the linked list is
same as the values of the Node. The maximum
index is which is divisble by 3 is 6 and the
node value of the 6th index is 6.
