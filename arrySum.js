/** var numbers = [45, 65, 78, 12, 3, 54, 65];

var sum = 0;

for(var i = 0; i < numbers.length; i++){
    var element = numbers[i];
    sum = sum + element;
}

console.log("total of the number: ", sum); */

function getArraySum(numbers){
    var sum = 0;

    for(var i = 0; i < numbers.length; i++){
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
    
}
var nambers = [45, 38, 85, 93,45,85];
var result = getArraySum(numbers);
console.log("total of the number:", result);

