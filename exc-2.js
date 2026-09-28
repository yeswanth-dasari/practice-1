function sumMultiples(a, b, n){
    let sum1 = 0;
    for(let i = 1; i < n; i++){
        if(i % a === 0 || i % b === 0){
            sum1 += i;
        }
    }
    return sum1;
}
document.getElementById("calculate").onclick = function(){
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let n = Number(document.getElementById("n").value);

    let answer = sumMultiples(a, b, n);
    document.getElementById("result1").innerHTML = "Answer:" + answer;
};