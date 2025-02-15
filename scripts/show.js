const ELEMENTS = document.querySelectorAll(".element");

const checkElements = () => {
    const triggerBottom = window.innerHeight / 5 * 4;

    ELEMENTS.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < triggerBottom) {
            element.classList.add("show");
        }
        else {
            element.classList.remove("show");
        }
    });
};

window.addEventListener("scroll", checkElements);