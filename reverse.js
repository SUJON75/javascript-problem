function reverseSting(str){
    var reverse = "";
    for(var i = 0; i<str.length; i++){
        var char = str[i];
        reverse = char + reverse ;
    }

    return reverse;
}

var statement = "Hello Alien bhai bother.";
var forAlien = reverseSting(statement);
console.log(forAlien);
var foodVlog = reverseSting("ke khawa jai ... khida lagcha");
console.log(foodVlog);