// Your code here
/*document.addEventListener("keydown", function (event) {
    console.log(event);
  });*/
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";



function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight() {
    /*const rightNumbers = dodger.style.right.replace("px", "");
    const right = parseInt(rightNumbers, 10);*/
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left < 360){
      dodger.style.left = `${left + 1}px`;
    }
    
}


document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      moveDodgerLeft();
    }
    if(event.key === "ArrowRight"){
        moveDodgerRight()
    }
  });
