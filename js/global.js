// pour le menu mobile 
function menuMobile() {
  const btn = document.querySelector(".burger");
  const header = document.querySelector(".header");
  const links = document.querySelectorAll(".navbar a");
  btn.addEventListener("click", () => {
    btn.addEventListener("click", () => {
      header.classList.toggle("show-nav");
    });
    links.forEach((link) => {
      link.addEventListener("click", () => {
        header.classList.remove("show-nav");
      });
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

}