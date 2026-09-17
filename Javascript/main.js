const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  function (entries) {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    }
  },
  {
    threshold: 0.15,
  },
);

for (const element of revealElements) {
  observer.observe(element);
}

const navigation = document.querySelector("nav");

window.addEventListener("scroll", function () {
  if (window.scrollY > 40) {
    navigation.classList.add("nav-scrolled");
  } else {
    navigation.classList.remove("nav-scrolled");
  }
});
