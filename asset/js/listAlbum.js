const imageList = [
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "6.jpeg",
  "7.jpeg",
  "8.jpeg",
  "9.jpeg",
  "10.jpeg",
  "11.jpeg",
  "12.jpeg",
  "13.jpeg",
  "14.jpeg",
  "15.jpeg",
  "16.jpeg",
  "18.jpeg",
  "19.jpeg",
  "20.jpeg",
  "21.jpeg",
  "22.jpeg",
  "23.jpeg",
  "24.jpeg",
  "25.jpeg",
  "26.jpeg",
  "27.jpeg",
  "28.jpeg",
  "29.jpeg",
  "30.jpeg",
];

const pinterestOrder = [
  "small",
  "medium",
  "small",
  "medium",
  "small",
  "medium",
  "large",
  "large",
  "small",
  "medium",
  "large",
  "large",
];
const imageListContainer = document.getElementById("image-list");
const slider = document.getElementById("slider");
const sliderImage = document.getElementById("slider-image");
let currentIndex = 1;

imageList.forEach((src, index) => {
  const img = document.createElement("img");
  img.src = "../images/listPhoto/" + src;
  img.alt = `Image ${index + 1}`;
  img.className = `img-album ${
    pinterestOrder[((index + 1) % pinterestOrder.length) + 1 - 1]
  }`;
  img.onclick = () => openSlider(index);
  imageListContainer.appendChild(img);
});

function openSlider(index) {
  sliderImage.src = "../images/listPhoto/" + imageList[index];
  slider.style.display = "flex";
}

function closeSlider() {
  slider.style.display = "none";
}

function nextImage() {
  currentIndex = (currentIndex + 1) % imageList.length;
  sliderImage.src = "../images/listPhoto/" + imageList[currentIndex];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
  sliderImage.src = "../images/listPhoto/" + imageList[currentIndex];
}

slider.addEventListener("click", (e) => {
  if (e.target === slider) {
    closeSlider();
  }
});
