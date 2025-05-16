function waitForElements(selectors, callback) {
  const interval = setInterval(() => {
    const elements = selectors.map((sel) => document.querySelector(sel));
    if (elements.every((el) => el)) {
      clearInterval(interval);
      callback(...elements);
    }
  }, 100);
}

window.addEventListener("DOMContentLoaded", () => {
  waitForElements([".content", ".content2", ".objet", ".stars", ".blackHole"], (content, content2, navBar, stars, BlackHole) => {
    setTimeout(() => {
      BlackHole.style.transition = "2000ms";
      BlackHole.style.opacity = "1";
      stars.style.transition = "opacity 600ms transform 0s";
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
});
