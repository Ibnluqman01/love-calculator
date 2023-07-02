



function cal(){
    let count = Math.floor(Math.random() * 100) + 1;
    let valM = document.getElementById("man").value;
    let valF = document.getElementById("woman").value;
    let compatible = document.querySelector(".compatible");
    let container = document.querySelector(".loveCon");
    let display = document.querySelector(".display");
    let congratFirst = document.querySelector(".congrat1");
    let congratSecond = document.querySelector(".congrat2");

    // document.getElementsByClassName("boy")[0].innerHTML = valM;
    // document.getElementsByClassName("girl")[0].innerHTML = valF;
    //document.getElementById("pecen").innerHTML = count + " %";

    if(count >= 70){
        container.style.display = "none";
        congratFirst.style.display = "flex"
        congratFirst.style.flexDirection = "column"
        display.style.display = "flex";
        compatible.innerHTML = valM + " and " + valF + " are " + count + "% " + "both compatible 🥂.";
    }else{
        container.style.display = "none";
        congratSecond.style.display = "flex"
        display.style.display = "flex";
        compatible.innerHTML = valM + " and " + valF + " are " + count + "% " + "not compatible.";
    }


}

// function display(){
//     let count = Math.floor(Math.random() * 100) + 1;
//     let compatible = document.querySelector(".compatible");
//     let notCompatible = document.querySelector(".non-compatible");




// }