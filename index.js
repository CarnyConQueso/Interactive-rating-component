

let x  = document.querySelectorAll(".num");
let y = x.length; 
for(let i = 0; i < y; i++){
    x[i].addEventListener("click", function (e) {
        let chosen = document.querySelector(".numClick");
        if(chosen){
            chosen.classList.remove("numClick");
        }
        console.log(this.className);
        this.classList.add("numClick");
        console.log(this.className);
    }, false);
} 

let btn = document.querySelector(".btn")
btn.addEventListener("click", function (){
    let select = document.querySelector(".numClick");
    let startCard = document.querySelector(".ratingStart");
    let endCard = document.querySelector(".ratingEnd");
    let chosenScore = document.querySelector(".chosenScore");
    if(select){
        score = select.textContent;
        startCard.style.display = "none";
        endCard.style.display = "block";
        chosenScore.textContent = score;
    
    }else{
        alert("Please choose a rating");
    }

})



