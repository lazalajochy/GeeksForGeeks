//https://practice.geeksforgeeks.org/problems/remove-characters-from-alphanumeric-string0648/1?page=1&category[]=Strings&sortBy=difficulty
var s = '"AA1d23cBB4"';
removeCharacters(s);

function removeCharacters(s) {
    return s.replace(/[a-zA-Z]/g, '');
}