var name = [ 2, 3, 4, 5, 2, 3, 19, 34, 33, 5,];
var uniqueName = [];

for(var i = 0; i<name.length; i++){
    var element = name[i];
    var index = uniqueName.indexOf(element);
    if(index == -1){
        uniqueName.push(element);
    }
}
console.log(uniqueName);

function add(a, b){
    return a + b;
}
add("adam" + "eve")
"adameveundefined"