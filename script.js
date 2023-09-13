var imagePaths = [
  "./1.jpg",
  "./2.jpg",
  "./3.jpg",
  "./4.jpg",
  "./5.jpg",
  "./6.jpg",
  "./7.jpg",
  "./8.jpg",
  "./9.jpg",
  "./10.jpg",
  "./11.jpg",
  "./12.jpg",
  "./13.jpg",
  "./14.jpg",
  "./15.jpg",
  "./16.jpg",
];
function addImages() {
  let container = document.querySelector(".container");
  imagePaths.forEach(function (imagePath, index) {
    let imgElement = document.createElement("img");
    imgElement.classList.add("x");
    imgElement.src = imagePath;
    imgElement.onclick = function () {
        openImage(index + 1);
    };
    container.appendChild(imgElement);
});
}
addImages();
let overlayContainer = document.getElementById("overlay");
let centerContainer = document.getElementById("center");
let currentIndex = 0;
function openImage(imageSrc) {
  currentIndex = imageSrc;
  document.getElementById("overlayImage").src = `${imageSrc}.jpg`;
  overlayContainer.style.display = "block";
  centerContainer.style.display = "block";
  hideButtons()
}
function previousButton() {
  if (currentIndex > 1) {
    currentIndex--;
    displayImage(currentIndex);
  }
}
function nextButton() {
  if (currentIndex < imagePaths.length) {
    currentIndex++;
    displayImage(currentIndex);
  }
}
function displayImage(currentIndex) {
  currentIndex;
  document.getElementById("overlayImage").src = `${currentIndex}.jpg`;
  overlayContainer.style.display = "block";
  centerContainer.style.display = "block";
  hideButtons()
}
function hideImage() {
    overlayContainer.style.display = "none";
    centerContainer.style.display = "none";
}
function hideButtons() {
    document.getElementById("prev").style.visibility = currentIndex === 1 ? "hidden" : "visible";
    document.getElementById("next").style.visibility = currentIndex === imagePaths.length ? "hidden" : "visible";
}
