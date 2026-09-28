function sumOfMultiples(a,b,n){
    let sum = 0;
    for(let i = 1; i < n; i++){
        if(i % a === 0 || i % b === 0){
            sum +=i;
        }
    }
    return sum;
}
function calculateSum(){
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let n = Number(document.getElementById("n").value);

    let result = sumOfMultiple(a,b,n);

    document.getElementById("result").textContent = "sum =" + result ;
}