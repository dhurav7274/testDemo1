// function max(num1,num2){
// if(num1 > num2){
//     console.log(num1);
// }else{
//     console.log(num2);
// }
// }

// max(5,2)


var array = [1,5,20,100,-1];
var largest= 0;

for (i=0; i<=array.length;i++){
    if (array[i]>largest) {
        var largest = array[i];
    }
}

console.log(largest);
