const header = document.querySelector(".header");
const subListElts = document.querySelectorAll(".header__sub-list");
const linkElts = document.querySelectorAll(".header__link a");
const arrowElts = document.querySelectorAll(".header__link-arrow");
const mobileBtn = document.querySelector(".header__mobile-btn");
const dropdownMenu = document.querySelector(".dropdown-menu");
const dropMenuElts = document.querySelectorAll(".dropdown-menu__sub-list");
const dropLinkElts = document.querySelectorAll(".dropdown-menu__link a");
const dropArrowElts = document.querySelectorAll(".dropdown-menu__link-arrow");
const signature = document.getElementById("signature");

toggleListAndMenu(linkElts, subListElts, arrowElts);
toggleListAndMenu(dropLinkElts, dropMenuElts, dropArrowElts);

// Handle Header/Menu > toggle sub lists
function toggleListAndMenu(links, subElts, arrows) {
    links.forEach((elt, index) =>
        elt.addEventListener("click", () => {
            subElts.forEach((elt, currentIndex) => {
                if (elt.classList.contains("visible") && index !== currentIndex) {
                    elt.classList.remove("visible");
                    arrows[currentIndex].classList.remove("rotateX");
                }
            });
            subElts[index].classList.toggle("visible");
            arrows[index].classList.toggle("rotateX");
        })
    );
    // Handle Click outside of a lists
    document.addEventListener("click", (e) => {
        if (!e.target.classList.contains("JS-link")) {
            subElts.forEach((elt, currentIndex) => {
                if (elt.classList.contains("visible")) {
                    elt.classList.remove("visible");
                    arrows[currentIndex].classList.remove("rotateX");
                }
            });
        }
    });
}

// Toggle dropdown menu
mobileBtn.addEventListener("click", () => {
    mobileBtn.classList.toggle("cross");
    dropdownMenu.classList.toggle("visible");
});

// Handle resize for dropdown menu
window.addEventListener("resize", () => {
    if (window.innerWidth > 890) {
        dropdownMenu.classList.remove("visible");
        mobileBtn.classList.remove("cross");
    }
});

window.addEventListener("scroll", () => {
    if (window.scrollY >= 800) {
        header.classList.add("translateY");
        setTimeout(() => {
            header.classList.add("header-scrolled");
        }, 500);
    } else {
        header.classList.remove("header-scrolled");
        header.classList.remove("translateY");
    }
});

signature.addEventListener("click", () => {
    signature.classList.toggle("signature-active");
});
