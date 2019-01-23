var regexp = /^[A-Z]/;
function isFirstLetterUpperCase(str) {
    regexp= /^[A-z]/;
    if(regexp.test(str)) {
        console.log("string's first character is uppercase");
    } else {
        console.log("string's first character is not upper case");
    }
}