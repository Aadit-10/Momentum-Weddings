document.addEventListener("DOMContentLoaded", function () {
  const carousels = document.querySelectorAll(".carousel");
  carousels.forEach((carousel) => {
    new bootstrap.Carousel(carousel);
  });

  const cards = document.querySelectorAll(".card");
  const imagesContainers = document.querySelectorAll(".card-images");

  function rotateImages(imagesContainer) {
    const images = imagesContainer.querySelectorAll(".card-img");
    let currentIndex = 0;

    function showImage(index) {
      images.forEach((image, i) => {
        if (i === index) {
          image.style.opacity = "1"; // Show the selected image
        } else {
          image.style.opacity = "0"; // Hide other images
        }
      });
    }

    function nextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }

    setInterval(nextImage, 1000); // Change image every 1 second
    showImage(currentIndex); // Show the first image initially
  }

  imagesContainers.forEach(rotateImages);
});


// sampless

function pathPrepare ($el) {
  var lineLength = $el[0].getTotalLength();
  $el.css("stroke-dasharray", lineLength);
  $el.css("stroke-dashoffset", lineLength);
}

var $word = $("path#word");
var $dot = $("path#dot");

// prepare SVG
pathPrepare($word);
pathPrepare($dot);

// init controller
var controller = new ScrollMagic.Controller();

// build tween
var tween = new TimelineMax()
  .add(TweenMax.to($word, 0.9, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
  .add(TweenMax.to($dot, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone}))  // draw dot for 0.1
  .add(TweenMax.to("path", 1, {stroke: "#33629c", ease:Linear.easeNone}), 0);			// change color during the whole thing

// build scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 200, tweenChanges: true})
        .setTween(tween)
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);