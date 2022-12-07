const planetCards = document.querySelectorAll(".Planets-Container");
const nxtBtn = document.querySelector("#nxt-btn");
const preBtn = document.querySelector("#pre-btn");

planetCards.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    console.log(containerDimensions);
    let containerWidth = containerDimensions.width;
    console.log(containerWidth);

    nxtBtn.addEventListener("click", () => {
        item.scrollLeft += containerWidth;
    });
    preBtn.addEventListener("click", () => {
        item.scrollLeft -= containerWidth;
    });
})