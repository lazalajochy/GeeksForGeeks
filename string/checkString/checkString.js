//https://practice.geeksforgeeks.org/problems/check-string1818/1?page=1&category[]=Strings&sortBy=difficulty

var s = 'geeks';
check(s);

function check(s) {
    const letter = s[0]
    s = [...s];
    return s.every((x) => x == letter)

}