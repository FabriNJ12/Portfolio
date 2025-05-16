const titles = [
    {
      title: "Proyecto funcional del sistema UALÁ",
      subtitle: "Sistema que gestiona operaciones bancarias básicas. Permite a los usuarios iniciar sesión, consultar su cuenta y realizar acciones como transferencias",
      tag1: "#Alta de cuentas",
      tag2: "#Base de datos",
      tag3: "#Registro de movimientos",
      tag4: "#Inicio sesión",
      footer: "Uno de mis proyectos más ambiciosos, inicialmente creado para un proyecto de la Universidad.",
    },
    {
      title: "Gestor de control vehicular",
      subtitle: "Sistema que automatiza el proceso de controles vehiculares. Notifica al personal designado y gestiona la emisión de multas.",
      tag1: "#Login con jerarquía",
      tag2: "#Gestión de ubicación",
      tag3: "#UI dinámica según el rol",
      tag4: "#Validación de formularios",
      footer: "Proyecto creado en Angular, el cual me hizo descubrir lo hermoso que es este framework",
    },
    {
      title: "Replica Sistema operativo Samsung",
      subtitle:
        "Sistema que replica la interfaz One UI de Samsung. Incluye pantalla de bloqueo, menú principal, panel de control y versiones funcionales de apps como clima, temporizador, cronómetro, alarma, calculadora y reproductor multimedia.",
      tag1: "#App Caluladora",
      tag2: "#App Clima",
      tag3: "#Gestos",
      tag4: "#Animaciones.",
      footer: "mi primer gran proyecto realizado a fin de aprender JavaScript",
    },
  ];

  const elements = document.querySelectorAll(".textFill-1, .textFill-2, .textFill-3");
  const title = document.querySelector(".title") 
  const subtitle = document.querySelector(".subtitle")
  const one = document.querySelector(".one") 
  const two = document.querySelector(".two") 
  const three = document.querySelector(".three") 
  const four = document.querySelector(".four") 
  const footer = document.querySelector(".footer") 
  const uala = document.querySelector(".Uala") 
  const Transito = document.querySelector(".Transito") 
  const Samsung = document.querySelector(".Samsung") 

  elements.forEach((el, index) => {
    el.addEventListener("mouseenter", () => {
      title.textContent = titles[index].title;
      subtitle.textContent = titles[index].subtitle;
      one.textContent = titles[index].tag1;
      two.textContent = titles[index].tag2;
      three.textContent = titles[index].tag3;
      four.textContent = titles[index].tag4;
      footer.textContent = titles[index].footer;
      if (index === 0) {
        uala.style.opacity = "1";
        Transito.style.opacity = "0";
        Samsung.style.opacity = "0";
      } else if (index === 1) {
        uala.style.opacity = "0";
        Transito.style.opacity = "1";
        Samsung.style.opacity = "0";
      } else if (index === 2) {
        uala.style.opacity = "0";
        Transito.style.opacity = "0";
        Samsung.style.opacity = "1";
      }
    });
  });