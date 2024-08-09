const imageList = [
  "1.JPG",
  "2.JPG",
  "3.JPG",
  "4.JPG",
  "5.JPG",
  "6.JPG",
  "7.JPG",
  "8.JPG",
  "9.JPG",
  "10.JPG",
  "11.JPG",
  "12.JPG",
  "13.JPG",
  "14.JPG",
  "15.JPG",
  "16.JPG",
  "18.JPG",
  "19.JPG",
  "20.JPG",
  "21.JPG",
  "22.JPG",
  "23.JPG",
  "24.JPG",
  "25.JPG",
  "26.JPG",
  "27.JPG",
  "28.JPG",
  "29.JPG",
  "30.JPG",
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
  img.src = "./images/listPhoto/" + src;
  img.alt = `Image ${index + 1}`;
  img.className = `img-album ${
    pinterestOrder[((index + 1) % pinterestOrder.length) + 1 - 1]
  }`;
  img.onclick = () => openSlider(index);
  imageListContainer.appendChild(img);
});

function openSlider(index) {
  sliderImage.src = "./images/listPhoto/" + imageList[index];
  slider.style.display = "flex";
}

function closeSlider() {
  slider.style.display = "none";
}

function nextImage() {
  currentIndex = (currentIndex + 1) % imageList.length;
  sliderImage.src = "./images/listPhoto/" + imageList[currentIndex];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
  sliderImage.src = "./images/listPhoto/" + imageList[currentIndex];
}

slider.addEventListener("click", (e) => {
  if (e.target === slider) {
    closeSlider();
  }
});
