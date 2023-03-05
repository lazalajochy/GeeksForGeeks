//https://practice.geeksforgeeks.org/problems/check-for-binary/1?page=1&category[]=Strings&sortBy=difficulty

var str = '0111100110101100';

isBinary(str);

function isBinary(str) {
    return /^[01]+$/.test(str);
}