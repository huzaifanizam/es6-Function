// function sum(num1,num2) {
    
//     let total = num1 + num2;

//     return total
// }
window.prt = function() {
    
    console.log(new Date())
}
// prt();
// prt();

// window.arg = function(arr) {
//     console.log("avg function in running");

//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     let result = sum / arr.length;
//     result = result.toFixed(2);
//     result = Number(result);

//     // result = Number(result);
//     return result
// }

// setTimeout(()=>{

//     console.log(arg([2,4,2,2,4,5,4]));

// },3000)


function sum(num1 , num2 , index) {
    return num1 + num2;
};

function recloop(index , end){

    console.log("loop body: ", index);

    if (index ===  end) {
        return;
    }else{
        recloop(index + 1, end);
    }
}
recloop(0, 5);