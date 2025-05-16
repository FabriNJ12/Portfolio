 const area = document.querySelector(".area")
  const figure = document.querySelector(".figure") 
  const textFill1 = document.querySelector(".textFill-1") 
  const textFill2 = document.querySelector(".textFill-2") 
  const textFill3 = document.querySelector(".textFill-3") 

  figure.style.opacity = "0";
  let targetY = 0;
  let currentY = 0;
  const speed = 0.02; // Cuanto más bajo, más delay (0.1 a 0.3 es lo ideal)

  function animate() {
    const distance = targetY - currentY;
    currentY += distance * speed;

    figure.style.top = `${currentY}px`;
    requestAnimationFrame(animate);
  }

  area.addEventListener("mousemove", (e) => {
    const areaRect = area.getBoundingClientRect();
    const mouseY = e.clientY - areaRect.top;
    const figureHeight = figure.offsetHeight;

    // Calcula la posición ideal (centrar el div con el puntero)
    let newTarget = mouseY - figureHeight / 2;
    newTarget = Math.max(0, Math.min(newTarget, area.offsetHeight - figureHeight));

    targetY = newTarget;
  });

  figure.style.position = "absolute";
  animate(); // inicia la animación

  textFill1.addEventListener("mouseenter", () => {
    figure.style.transition = "opacity 400ms";
    figure.style.opacity = "1";
    figure.src = "/projets/ualaMD.png";
  });

  textFill2.addEventListener("mouseenter", () => {
    figure.style.transition = "opacity 400ms";
    figure.style.opacity = "1";
    figure.src = "/projets/TransControlMD.png";
  });

  textFill3.addEventListener("mouseenter", () => {
    figure.style.transition = "opacity 400ms";
    figure.style.opacity = "1";
    figure.src = "/projets/SamsungMD.png";
  });

  textFill1.addEventListener("mouseleave", () => {
    figure.style.transition = "opacity 400ms";
    figure.style.opacity = "0";
  });

  textFill2.addEventListener("mouseleave", () => {
    figure.style.transition = "opacity 400ms";
    figure.style.opacity = "0";
  });

  textFill3.addEventListener("mouseleave", () => {
    figure.style.transition = "opacity 400ms";
    figure.style.opacity = "0";
  });