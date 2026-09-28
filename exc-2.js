function calculateSum(){
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let n = Number(document.getElementById("n").value);

    let sum = 0;
    for(let i = 1; i < n; i++){
        if(i % a === 0 || i % b === 0){
            sum += i;
        }
    }
    document.getElementById("result1").innerHTML = "Sum =" + sum;
}

// function to move to the next input when we press enter after entering value to it.

document.getElementById("a").addEvnetListener("keydown",function(event){
    if(event.key === "Enter"){
        document.getElementById("b").focuus();
    }
});

document.getElementById("b").addEvnetListener("keydown",function(event){
    if(event.key === "Enter"){
        document.getElementById("n").focuus();
    }
});

document.getElementById("n").addEvnetListener("keydown",function(event){
    if(event.key === "Enter"){
        calculate();
    }
});