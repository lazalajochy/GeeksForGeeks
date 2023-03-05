var S = "ckjkUUYII"

countCamelCase(S);

function countCamelCase(s) {
    return (s.match(/[A-Z]/g)) ? s.match(/[A-Z]/g).length : 0;

}




