const imagePath = "../images/listPhoto/";
const imageNames = [
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
  "15.jpg",
  "16.JPG",
  "17.JPG",
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
  "31.JPG",
  "32.JPG",
  "33.JPG",
  "34.JPG",
  "35.JPG",
  "36.JPG",
  "37.JPG",
  "38.DNG",
  "39.DNG",
  "40.DNG",
  "41.JPG",
  "42.JPG",
  "43.JPG",
  "44.JPG",
  "45.JPG",
  "46.JPG",
  "47.JPG",
  "48.JPG",
  "49.JPG",
  "50.JPG",
];

// Số lượng ảnh đã tải lên
let loadedImagesCount = 0;

// Hiển thị 6 ảnh đầu tiên
displayImages();

// Thêm sự kiện scroll để tải thêm ảnh khi cần thiết
window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    // Nếu đã cuộn đến cuối trang, tải thêm ảnh
    displayImages();
  }
});
function displayImages() {
  const imageGallery = document.getElementById("imageGallery");

  // Tải thêm 6 ảnh đầu tiên
  for (
    let i = loadedImagesCount;
    i < Math.min(loadedImagesCount + 6, imageNames.length);
    i++
  ) {
    const img = document.createElement("img");
    img.src = `${imagePath}${imageNames[i]}`;
    img.alt = imageNames[i];
    img.className = "album-image";

    // Điều chỉnh chất lượng hình ảnh
    adjustImageQuality(img, 0.2); // 0.7 là chất lượng ảnh

    imageGallery.appendChild(img);

    loadedImagesCount++;

    // Dừng nếu đã tải đủ ảnh
    if (loadedImagesCount >= imageNames.length) {
      break;
    }
  }
}

// Hàm điều chỉnh chất lượng hình ảnh
function adjustImageQuality(img, quality) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  // Set kích thước canvas
  canvas.width = img.width;
  canvas.height = img.height;

  // Vẽ hình ảnh lên canvas
  ctx.drawImage(img, 0, 0, img.width, img.height);

  // Convert thành Blob với chất lượng được thiết lập
  canvas.toBlob(
    function (blob) {
      const url = URL.createObjectURL(blob);
      img.src = url;
    },
    "image/jpeg",
    quality
  );
}
