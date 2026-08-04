import "./style.css";
import { renderHome } from "./scripts/renderHome";
import { renderMenu } from "./scripts/renderMenu";
import { renderAbout } from "./scripts/renderAbout";
import { renderContact } from "./scripts/renderContact";

const app = {
  elements: {
    navMenu: document.querySelector(".header .nav .menu"),
    contentSection: document.querySelector(".main .section"),
  },
  init() {
    //default εμφάνιση του περιεχοενου που είναι στην σελίδα home
    this.renderHome();
    //προσθήκη eventListener σε όλα τα κουμπιά του menu
    this.elements.navMenu.addEventListener("click", (event) => {
      const target = event.target.dataset.view;
      if (!target) {
        return;
      } else if (target === "home") {
        this.renderHome();
      } else if (target === "menu") {
        this.renderMenu();
      } else if (target === "about") {
        this.renderAbout();
      } else if (target === "contact") {
        this.renderContact();
      }
    });

    //Νέο listener για να πιάσουμε το button που ειναι στο home page
    this.elements.contentSection.addEventListener("click" , (event) => {
      //εδώ βρίσκουμε το κοντινότερο Button και το ελέγχουμε εάν έχει δημιουργηθεί
      const button = event.target.closest("button[data-view]");
      if(!button) return;

      const view = button.dataset.view;
      if (view === "menu") this.renderMenu();
      else if (view === "contact") this.renderContact();
    });
  },
  renderHome() {
    this.elements.contentSection.innerHTML = "";
    this.elements.contentSection.insertAdjacentHTML("beforeend", renderHome());
  },
  renderMenu() {
    this.elements.contentSection.innerHTML = "";
    this.elements.contentSection.appendChild(renderMenu());
  },
  renderAbout() {
    //alert("hi about");
    this.elements.contentSection.innerHTML = "";
    this.elements.contentSection.insertAdjacentHTML("beforeend", renderAbout());
  },
  renderContact() {
    //alert("hi contact");
    this.elements.contentSection.innerHTML = "";
    this.elements.contentSection.insertAdjacentHTML(
      "beforeend",
      renderContact(),
    );
  },
};

app.init();
