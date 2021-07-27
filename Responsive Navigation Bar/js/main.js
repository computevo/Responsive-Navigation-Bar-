const collapsibles = document.querySelectorAll("nav");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("nav--expanded");
  })
);