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

  for (let i = 0; i < imagePaths.length; i++) {
    let imgElement = document.createElement("img");
    imgElement.classList.add("x");
    imgElement.src = imagePaths[i];
    imgElement.onclick = (function (index) {
      return function () {
        openImage(index);
      };
    })(i + 1);
    container.appendChild(imgElement);
  }
}

addImages();

let x = document.getElementById("overlay");
let y = document.getElementById("center");
let currentIndex = 0;

function openImage(imageSrc) {
  currentIndex = imageSrc;
  document.getElementById("overlayImage").src = `${imageSrc}.jpg`;
  x.style.display = "block";
  y.style.display = "block";
  buttonWork();
}

function previousButton() {
  if (currentIndex > 1) {
    currentIndex--;
    displayImage(currentIndex);
  }
}

function nextButton() {
  if (currentIndex < 16) {
    currentIndex++;
    displayImage(currentIndex);
  }
}
function displayImage(currentIndex) {
  currentIndex;
  document.getElementById("overlayImage").src = `${currentIndex}.jpg`;
  x.style.display = "block";
  y.style.display = "block";
  buttonWork();
}
function hideImage() {
  x.style.display = "none";
  y.style.display = "none";
}

function buttonWork() {
  if (currentIndex == "1") {
    console.log("hd");
    document.getElementById("prev").style.visibility = "hidden";
  } else {
    console.log("hd");
    document.getElementById("prev").style.visibility = "visible";
  }
  if (currentIndex == "16") {
    document.getElementById("next").style.visibility = "hidden";
  } else {
    document.getElementById("next").style.visibility = "visible";
  }
}
