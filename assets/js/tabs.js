const tabLinks = document.querySelectorAll(".tab-link");
const tabContents = document.querySelectorAll(".tab-content");

tabLinks.forEach(link => {
  link.addEventListener("click", () => {
    // remove active classes
    tabLinks.forEach(btn => btn.classList.remove("active"));
    tabContents.forEach(content => content.classList.remove("active"));

    // add active to clicked tab + its content
    link.classList.add("active");
    document.getElementById(link.dataset.tab).classList.add("active");
  });
});
