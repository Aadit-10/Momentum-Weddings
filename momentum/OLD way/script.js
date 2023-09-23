document.addEventListener("DOMContentLoaded", function () {
  const carousels = document.querySelectorAll(".carousel");
  carousels.forEach((carousel) => {
    new bootstrap.Carousel(carousel);
  });

  const cards = document.querySelectorAll(".card");
  const imagesContainers = document.querySelectorAll(".card-images");

  function rotateImages(imagesContainer, delay) {
    const images = imagesContainer.querySelectorAll(".carousel-item");
    let currentIndex = 0;

    function showImage(index) {
      images.forEach((image, i) => {
        if (i === index) {
          image.classList.add("active"); // Show the selected image
        } else {
          image.classList.remove("active"); // Hide other images
        }
      });
    }

    function nextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }

    setInterval(nextImage, delay);
    showImage(currentIndex);
  }

  // Call rotateImages for each card with a 1-second delay
  rotateImages(imagesContainers[0], 1000); // 1 second delay for first card
  rotateImages(imagesContainers[1], 1000); // 2 seconds delay for second card
  rotateImages(imagesContainers[2], 1000); // 3 seconds delay for third card
});