// pour le menu mobile
function menuMobile() {
  const btn = document.querySelector(".burger");
  const header = document.querySelector(".header");
  const links = document.querySelectorAll(".navbar a");

  
    btn.addEventListener('click', () => {
      header.classList.toggle('show-nav');
    });
    links.forEach(link => {
      link.addEventListener('click', () => {
        header.classList.remove('show-nav');
      });
    });
  
}

menuMobile();

// portfolio

function tabsFilters() {
  const tabs = document.querySelectorAll(".portfolio-filters a");
  const projets = document.querySelectorAll(".portfolio .card");
  // pour reset la fonction active quand on click sur un lien
  const resetActiveLinks = () => {
    tabs.forEach((elem) => {
      elem.classList.remove("active");
    });
  };

  const showProjets = (elem) => {
    console.log(elem);
    projets.forEach((projet) => {
      let filter = projet.getAttribute("data-category");
      if (elem === "all") {
        projet.parentNode.classList.remove("hide");
        return;
      }
      // ne sera pas prit en compte
      if (filter !== elem) {
        projet.parentNode.classList.add("hide");
      } else {
        projet.parentNode.classList.remove("hide");
      }
    });
    tabs.forEach((elem) => {
      elem.addEventListener("click", (event) => {
        event.preventDefault();
        let filter = elem.getAttribute("data-filter");

        showProjets(filter);
        resetActiveLinks();
        elem.classList.add("active");
      });
    });
  };
  showProjets();
}

tabsFilters();

function showProjetDetails() {
  const links = document.querySelectorAll(".card_link");
  const modals = document.querySelectorAll(".modal");
  const btns = document.querySelectorAll(".modal_close");

  const hideModals = () => {
    modals.forEach((modal) => {
      modal.classList.remove("show");
    });
  };

  links.forEach((elem) => {
    elem.addEventListener("click", (event) => {
      event.preventDefault();
      document.querySelector(`[id=${elem.dataset.id}]`).classList.add("show");
    });
  });

  btns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      hideModals();
    });
  });
}
showProjetDetails();

// effets des barres de compétences

const observerIntersectionAnimation = () => {
  const sections = document.querySelectorAll("section");
  const skills = document.querySelectorAll(".skills .bar");

  sections.forEach((section, index) => {
    if (index === 0) return;
    section.style.opacity = "0";
    section.style.transition = "all 1.6s";
  });

  skills.forEach((elem, index) => {
    elem.style.width = "0";
    elem.style.transition = "all 1.6s";
  });

  let sectionObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let elem = entry.target;
        elem.style.opacity = 1;
      }
    });
  });

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });
//fonction l'apparition des barres en pourcentage
  let skillsObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let elem = entry.target;
        elem.style.width = elem.dataset.width + "%";
      }
    });
  });

  skills.forEach((skill) => {
    skillsObserver.observe(skill);
  });
};

observerIntersectionAnimation();
