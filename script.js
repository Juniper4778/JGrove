/* ==========================================
   Juniper Grove Property Service LLC
   script.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {

                e.preventDefault();

                const header = document.querySelector(".header");
                const headerHeight = header ? header.offsetHeight : 0;

                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.pageYOffset -
                    headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Add a shadow to the header after scrolling
    const header = document.querySelector(".header");

    function updateHeader() {
        if (!header) return;

        if (window.scrollY > 40) {
            header.style.boxShadow = "0 8px 24px rgba(0,0,0,.18)";
        } else {
            header.style.boxShadow = "none";
        }
    }

    updateHeader();
    window.addEventListener("scroll", updateHeader);

    // Placeholder contact form handler
    const form = document.querySelector(".contact-form form");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            alert(
                "Thank you for contacting Juniper Grove Property Service LLC! We'll get back to you as soon as possible."
            );

            form.reset();

        });

    }

});
