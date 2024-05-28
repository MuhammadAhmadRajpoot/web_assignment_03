// Get the modal
var modal = document.getElementById("imgModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("profileImg");
var modalImg = document.getElementById("modalImg");

// Event listener for clicking the image
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// Function to check if an element is in viewport
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle animations on scroll
function animateOnScroll() {
    var elements = document.querySelectorAll('.animate-left, .animate-right');
    elements.forEach(function(element) {
        if (isInViewport(element)) {
            element.classList.add('animate-show');
        } else {
            element.classList.remove('animate-show');
        }
    });
}

// Event listener for scroll
window.addEventListener('scroll', animateOnScroll);

// Initial animation check
animateOnScroll();
// Function to open CV in a new tab
function openCV() {
    window.open("Muhammad Ahmad Resume (1).pdf", "_blank");
}
