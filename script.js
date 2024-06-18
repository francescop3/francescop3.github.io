// JavaScript code goes here

var imageIndex = 0; // Initial index of the image
var images = ["image1.png", "image2.png", "image3.png", "image4.png"]; // Array of image filenames

var mainImage = document.getElementById("main-image");
var rightArrow = document.getElementById("right-arrow");
var leftArrow = document.getElementById("left-arrow");

rightArrow.addEventListener("click", function() {
    imageIndex++; // Increment the image index
    if (imageIndex >= images.length) {
        imageIndex = 0; // Reset index to 0 if it exceeds the number of images
    }
    mainImage.src = images[imageIndex]; // Update the src attribute of the image
});

leftArrow.addEventListener("click", function() {
    imageIndex--; // Increment the image index
    if (imageIndex < 0) {
        imageIndex = images.length -1; // Reset index to 0 if it exceeds the number of images
    }
    mainImage.src = images[imageIndex]; // Update the src attribute of the image
});