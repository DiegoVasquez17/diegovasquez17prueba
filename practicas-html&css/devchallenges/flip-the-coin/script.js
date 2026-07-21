let coin = document.querySelector(".img-container");
let heads = coin.children[0];
let tails = coin.children[1];
let txtResult = document.querySelector(".result")

let btnFlip = document.getElementById("flip-button");
let spins;
let isHeads = true;

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function flipCoin(){

    if (!btnFlip.disabled){
        // console.log("\nisHeads = " + isHeads);
        let duration = randomBetween(2, 4);
        // console.log(duration)
        spins = randomBetween(20, 50);
        // console.log("spins: " + spins)
        coin.style.setProperty("--spins", spins)
        // console.log(getComputedStyle(coin).getPropertyValue("--spins"));
        heads.style.animationDuration = `${duration}s`;
        tails.style.animationDuration = `${duration}s`;

        heads.classList.add("animate");
        tails.classList.add("animate");        
    }

}

coin.addEventListener("click", flipCoin);
btnFlip.addEventListener("click", flipCoin);

heads.addEventListener("animationstart", ()=> {
    btnFlip.setAttribute("disabled", "")
    txtResult.innerHTML = "...";

})

heads.addEventListener("animationend", ()=> {
    btnFlip.removeAttribute("disabled")
    heads.classList.remove("animate");
    tails.classList.remove("animate");  

    if (spins % 2 == 0){
        console.log("even spins");
    }
    else{
        console.log("uneven spins");
        if (isHeads){
            console.log("switch heads to tails");       
            heads.style.setProperty("--rotation", "180deg");
            tails.style.setProperty("--rotation", "360deg"); 
        }
        else{
            console.log("switch tails to heads");
            heads.style.setProperty("--rotation", "0deg");
            tails.style.setProperty("--rotation", "180deg");
        }
        isHeads = !isHeads;
    }

    console.log("isHeads = " + isHeads);

    if (isHeads){
        txtResult.innerHTML = "Heads";
    }
    else{
        txtResult.innerHTML = "Tails";
    }

})


