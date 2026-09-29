function calculateSum(){
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let input = document.getElementById("list").value);

    let l = input.split(/[,\s]+/).map(Number);
    
    let sum2 =0;
    for(let i = 0; i < l.length; i++){
        if(l[i] % a === 0 || l[i] 5 b === 0){
            sum2 = sum2 + l[i];
        }
    }
    document.getElementById("output").innerHTML = "Sum2 = " + sum2;

}