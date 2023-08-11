let starsContainer = document.getElementById("stars");

let active = -1;

for (let i = 0; i < 5; i++) {
  let starImg = document.createElement("img");

  starImg.src = "./img/uncoloured.png";
  starImg.className = "star-style";
  starsContainer.append(starImg);

  starImg.addEventListener("mouseover", () => onStarHover(i));

  starImg.addEventListener("mouseleave", onStarOut());

  starImg.addEventListener("click", () => onStarClick(i));
}

let stars = document.querySelectorAll(".star-style");

function onStarHover(i) {
  fill(i);
}
//function fill will tell whether we have to populate star with
//colour or not

function fill(ratingValue) {
  for (let x = 0; x < 5; x++) {
    if (x <= ratingValue) {
      stars[x].src = "./img/coloured.png";
     }
    // else {
    //   stars[x].src = "./img/uncoloured.png";
    // }
  }
}
function onStarOut() {
  fill(active);
}

function onStarClick(i) {
  active = i;
  document.getElementById("display-star-value").innerHTML = i + 1;
  fill(active);
}
