import "./style.css";
import {renderMenu} from "./scripts/renderMenu";

const app = {
    elements:{
        navMenu: document.querySelector(".header .nav .menu"),
        contentSection: document.querySelector(".main .section")
    },
    init(){
        //default εμφάνιση του περιεχοενου που είναι στην σελίδα home
        this.renderHome();
        //προσθήκη eventListener σε όλα τα κουμπιά του menu
        this.elements.navMenu.addEventListener("click" , (event) => {
            const target = event.target.dataset.view;
            if(!target){
                return;
            }else if(target==="home"){
                this.renderHome();
            }
            else if(target==="menu"){
                this.renderMenu();
            }
            else if(target==="about"){
                this.renderAbout();
            }
            else if(target==="contact"){
                this.renderContact();
            }

        });
    },
    renderHome(){
        //alert("hi home");
         this.elements.contentSection.innerHTML="";
        // const node = this.elements.contentSection;

        const content = `
  <span class="section-badge">Από το 1998 στην καρδιά της πόλης</span>
  
  <h1>Welcome to Chris's Restaurant</h1>
  
  <p class="section-lead">
    Experience the finest dining with our exquisite menu and exceptional service.
  </p>
  
  <p class="section-sub">
    Φρέσκα, τοπικά υλικά και συνταγές που περνούν από γενιά σε γενιά — 
    κάθε πιάτο φτιαγμένο με προσοχή, κάθε επίσκεψη μια εμπειρία.
  </p>

  <div class="section-actions">
    <button class="btn-primary" data-view="menu">Δες το Μενού</button>
    <button class="btn-secondary" data-view="contact">Κράτηση Τραπεζιού</button>
  </div>

  <div class="section-stats">
    <div class="stat">
      <span class="stat-number">25+</span>
      <span class="stat-label">Χρόνια Εμπειρίας</span>
    </div>
    <div class="stat">
      <span class="stat-number">40+</span>
      <span class="stat-label">Πιάτα στο Μενού</span>
    </div>
    <div class="stat">
      <span class="stat-number">4.9★</span>
      <span class="stat-label">Βαθμολογία Πελατών</span>
    </div>
  </div>
`;

this.elements.contentSection.insertAdjacentHTML("beforeend", content);
        // const h1 = document.createElement("h1");
        // h1.textContent = "Welcome to Chris's Restaurant";
        // const paragraph = document.createElement("p");
        // paragraph.textContent = `Experience the finest dining with our exquisite menu and exceptional
        //   service.`;
        // node.append(h1, paragraph);
    },
    renderMenu(){
        this.elements.contentSection.innerHTML="";
        this.elements.contentSection.appendChild(renderMenu());
    },
    renderAbout(){
        //alert("hi about");
        this.elements.contentSection.innerHTML="";
    },
    renderContact(){
        //alert("hi contact");
        this.elements.contentSection.innerHTML="";
    }
}

app.init();
