const list = document.querySelector(".filter__list"),
  items = document.querySelectorAll(".project__item");

function filter() {
  list.addEventListener("click", (event) => {
    const targetId = event.target.dataset.id;
    console.log(targetId);

    switch (targetId) {
      case "all":
        getItems(project__item);
        break;
      case "website":
        getItems(targetId);
        break;
      case "apps":
        getItems(targetId);
        break;
      case "desing":
        getItems(targetId);
        break;
      case "marketing":
        getItems(targetId);
        break;
    }
  });
}

filter();

function getItems(className) {
  items.forEach((item) => {
    if ((item, classList.contains("className"))) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
