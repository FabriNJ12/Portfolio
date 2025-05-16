const sideBar = document.querySelector(".sideBar") 
  const bg = document.querySelector(".bg") 
  const btnIn = document.querySelector(".btnIn") 
  const btnOut = document.querySelector(".btnOut") 

  btnIn.addEventListener("click", () => {
    sideBar.style.transition = "transform 300ms ease-in-out";
    sideBar.style.transform = "translateX(0%)";

    setTimeout(() => {
      bg.style.transition = "200ms";
      bg.style.opacity = "0";
      bg.style.pointerEvents = "none";
    }, 200);
  });

  btnOut.addEventListener("click", () => {
    bg.style.transition = "200ms";
    bg.style.opacity = "1";
    bg.style.pointerEvents = "auto";

    setTimeout(() => {
      sideBar.style.transition = "transform 300ms ease-in-out";
      sideBar.style.transform = "translateX(-100%)";
    }, 50);
  });

  const github = document.querySelector(".github") 
  const linkedin = document.querySelector(".linkedin") 
  const gmail = document.querySelector(".gmail") 

  window.addEventListener("DOMContentLoaded", () => {
    setInterval(() => {
      animation();
    }, 2000);
  });

  function animation() {
    github.style.transition = "transform 900ms";
    github.style.transform = "scale(1.3)";
    setTimeout(() => {
      github.style.transform = "scale(1)";
      linkedin.style.transition = "transform 900ms";
      linkedin.style.transform = "scale(1.3)";

      setTimeout(() => {
        linkedin.style.transform = "scale(1)";
        gmail.style.transition = "transform 900ms";
        gmail.style.transform = "scale(1.3)";

        setTimeout(() => {
          gmail.style.transform = "scale(1)";
        }, 300);
      }, 300);
    }, 300);
  }