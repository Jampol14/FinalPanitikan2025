document.addEventListener("DOMContentLoaded", () => {
    // Grab the elements for navigation
    const homeLink = document.getElementById("home");
    const mgaLiteraturaLink = document.getElementById("mgaLiteratura");
    const literaturaSelect = document.getElementById("literaturaSelect");

    // Show and hide combo box for "Mga Literatura"
    mgaLiteraturaLink.addEventListener("mouseover", () => {
        literaturaSelect.classList.remove("hidden");
    });

    mgaLiteraturaLink.addEventListener("mouseleave", () => {
        literaturaSelect.classList.add("hidden");
    });

    literaturaSelect.addEventListener("mouseover", () => {
        literaturaSelect.classList.remove("hidden");
    });

    literaturaSelect.addEventListener("mouseleave", () => {
        literaturaSelect.classList.add("hidden");
    });

    // Navigate to "Home" or other pages
    homeLink.addEventListener("click", (event) => {
        event.preventDefault();
        window.location.href = "index.html";
    });

    // For each link inside "literaturaSelect", redirect to its page
    const literaturaLinks = literaturaSelect.querySelectorAll("a");
    literaturaLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetPage = link.getAttribute("href");
            window.location.href = targetPage;
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    let lastScrollPosition = 0;

    window.addEventListener("scroll", () => {
        const currentScrollPosition = window.pageYOffset;

        if (currentScrollPosition > lastScrollPosition) {
            // Scrolling down: hide the navbar
            header.style.transform = "translateY(-100%)";
        } else {
            // Scrolling up: show the navbar
            header.style.transform = "translateY(0)";
        }

        lastScrollPosition = currentScrollPosition;
    });
});

