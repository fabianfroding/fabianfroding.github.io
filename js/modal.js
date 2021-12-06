var modalEle = document.querySelector(".modal");
var modalImage = document.querySelector(".modal-image");
Array.from(document.querySelectorAll(".project-img-thumbnail")).forEach(item => {
   item.addEventListener("click", event => {
      modalEle.style.display = "block";
      modalImage.src = event.target.src;
   });
});
document.querySelector(".modal-close").addEventListener("click", () => {
   modalEle.style.display = "none";
});