const slideInput = document.querySelector(".slide-input");
const addSlideBtn = document.querySelector(".add-slide-btn");
const carouselInner = document.querySelector(".carousel-inner");

addSlideBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const files = slideInput.files;
  
  [...files].forEach((file) => {
    let type = file.type;
    if (!type.includes("image/")) {
      window.alert("wrong format!")
      return;
    }
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const slide = document.createElement("div");
        slide.classList.add("carousel-item");
        if (carouselInner.children.length === 0) {
          slide.classList.add("active");
        }
        slide.innerHTML = `
          <img class="d-block w-100" src="${reader.result}" alt="Slide">
        `;
        carouselInner.appendChild(slide);
      };
      slideInput.value = "";
    }
  });
});