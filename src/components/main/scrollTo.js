window.addEventListener("navigate", (e) => {
  const event = e;
  const sectionId = event.detail;

  if (sectionId === "Home") {
    closeSideBar?.(); // usa el "optional chaining" en caso de que esté en otro archivo
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const target = document.getElementById(sectionId);
  if (target) {
    closeSideBar?.();
    const offset = -130;
    const targetPosition = target.offsetTop + offset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }
});

document.querySelectorAll("button[data-target]").forEach((button) => {
  button.addEventListener("click", () => {
    const sectionId = button.getAttribute("data-target") || "";

    // Si el target es "home", hace scroll hasta arriba
    if (sectionId === "Home") {
      closeSideBar();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const target = document.getElementById(sectionId);
    if (target) {
      closeSideBar();
      const offset = -130; // por ejemplo, -80px para subir
      const targetPosition = target.offsetTop + offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

const sideBar = document.querySelector(".sideBar");
const bg = document.querySelector(".bg");

function closeSideBar() {
  sideBar.style.transition = "transform 300ms ease-in-out";
  sideBar.style.transform = "translateX(0%)";

  setTimeout(() => {
    bg.style.transition = "200ms";
    bg.style.opacity = "0";
    bg.style.pointerEvents = "none";
  }, 200);
}
