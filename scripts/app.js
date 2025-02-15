const THUMBNAILS = document.querySelectorAll(".thumbnail img");
const CATS = document.querySelectorAll(".catsThumbnail img");
const DOGS = document.querySelectorAll(".dogsThumbnail img");
const FERRETS = document.querySelectorAll(".ferretsThumbnail img");
const POPUP = document.querySelector(".popup");
const POPUP_IMG = document.querySelector(".popup__img");
const CLOSE_POPUP = document.querySelector(".popup__close");
const ARROW_LEFT = document.querySelector(".arrow--left");
const ARROW_RIGHT = document.querySelector(".arrow--right");

let currentImgIndex;
let currentGallery;
let galleryThumbnails;

const closePopup = () => {
    POPUP.classList.add("hidden");
};

const fadeOut = () => {
    POPUP.classList.add("fadeOut");
    setTimeout(() => {
        closePopup();
        POPUP.classList.remove("fadeOut");
    }, 300);
};

const galleryChoice = () => {
    if (currentGallery === "cats") {
        galleryThumbnails = CATS;
    }
    else if (currentGallery === "dogs") {
        galleryThumbnails = DOGS;
    }
    else if (currentGallery === "ferrets") {
        galleryThumbnails = FERRETS;
    }
}

const showNextImg = () => {
    galleryChoice();
    if (currentImgIndex === galleryThumbnails.length - 1) {
        currentImgIndex = 0;
    }
    else {
        currentImgIndex++;
    }
    POPUP_IMG.src = galleryThumbnails[currentImgIndex].src;
};

const showPreviousImg = () => {
    galleryChoice();
    if (currentImgIndex === 0) {
        currentImgIndex = galleryThumbnails.length - 1;
    }
    else {
        currentImgIndex--;
    }
    POPUP_IMG.src = galleryThumbnails[currentImgIndex].src;
};

CATS.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", (e) => {
        POPUP.classList.remove("hidden");
        POPUP_IMG.src = e.target.src;
        currentImgIndex = index;
        currentGallery = "cats";
    });
});

DOGS.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", (e) => {
        POPUP.classList.remove("hidden");
        POPUP_IMG.src = e.target.src;
        currentImgIndex = index;
        currentGallery = "dogs";
    });
});

FERRETS.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", (e) => {
        POPUP.classList.remove("hidden");
        POPUP_IMG.src = e.target.src;
        currentImgIndex = index;
        currentGallery = "ferrets";
    });
});

CLOSE_POPUP.addEventListener("click", fadeOut, closePopup);

POPUP.addEventListener("click", (e) => {
    if (e.target == POPUP) {
        fadeOut();
    }
});

ARROW_RIGHT.addEventListener("click", showNextImg);
ARROW_LEFT.addEventListener("click", showPreviousImg);

document.addEventListener("keydown", (e) => {
    if (e.code === "ArrowRight" || e.keyCode === 39) {
        showNextImg();
    }

    if (e.code === "ArrowLeft" || e.keyCode === 37) {
        showPreviousImg();
    }

    if (e.code === "Escape" || e.keyCode === 27) {
        closePopup();
    }
});