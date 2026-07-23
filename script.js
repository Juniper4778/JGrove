
// Add a shadow effect to the header when scrolling

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.background = "rgba(255,255,255,.95)";
        header.style.boxShadow = "0 4px 20px rgba(0,0,0,.12)";
    } else {
        header.style.background = "rgba(255,255,255,.82)";
        header.style.boxShadow = "0 2px 15px rgba(0,0,0,.08)";
    }

});
