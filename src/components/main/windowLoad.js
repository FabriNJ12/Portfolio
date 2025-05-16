const content = document.querySelector(".content") 
  const content2 = document.querySelector(".content2") 
  const navBar = document.querySelector(".objet") 
  const stars = document.querySelector(".stars") 
  const BlackHole = document.querySelector(".blackHole")

  window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      BlackHole.style.transition = "2000ms";
      BlackHole.style.opacity = "1";
      stars.style.transition = "600ms";
      stars.style.opacity = "1";

      setTimeout(() => {
        content.style.transition = "opacity 400ms, transform 600ms";
        content.style.opacity = "1";
        content.style.transform = "translateY(0%)";

        setTimeout(() => {
          content2.style.transition = "opacity 400ms, transform 600ms";
          content2.style.opacity = "1";
          content2.style.transform = "translateY(0%)";
          BlackHole.style.transition = "0ms";
        }, 100);

        setTimeout(() => {
          navBar.style.transition = "opacity 600ms, transform 400ms";
          navBar.style.opacity = "1";
          navBar.style.transform = "translateY(0%)";
        }, 600);
      }, 600);
    }, 600);
  });