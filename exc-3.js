function calculateSum(){
    let a = Number(document.getElementById("a1").value);
    let b = Number(document.getElementById("b1").value);
    let input = document.getElementById("list1").value;

    let l = input.split(/[,\s]+/).map(Number);
    
    let sum2 =0;
    for(let i = 0; i < l.length; i++){
        if(l[i] % a === 0 || l[i] % b === 0){
            sum2 = sum2 + l[i];
        }
    }
    document.getElementById("output").innerHTML = "Sum2 = " + sum2;

}