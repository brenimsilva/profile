const skills = document.querySelector(".skills");
const projects = document.querySelector(".projects");
const checkBox = document.getElementById("toggle__checkbox");
projects.style.display = "none";

checkBox.addEventListener("click", () => {
  if (checkBox.checked) {
    console.log("checked");
    skills.classList.toggle("fadeOut");
    skills.classList.toggle("fadeIn");
    projects.classList.toggle("fadeOut");
    projects.classList.toggle("fadeIn");
    setTimeout(() => {
      skills.style.display = "none";
      projects.style.display = "";
    }, 300);
  } else {
    // skills.style.display = "";
    skills.classList.toggle("fadeIn");
    skills.classList.toggle("fadeOut");
    projects.classList.toggle("fadeIn");
    projects.classList.toggle("fadeOut");

    setTimeout(() => {
      projects.style.display = "none";
      skills.style.display = "";
    }, 300);
  }
});
