import "./style.css";

// import {greekDishes} from "./scripts/menu";

// console.log(greekDishes);

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
        const node = this.elements.contentSection;

        const h1 = document.createElement("h1");
        h1.textContent = "Welcome to Chris's Restaurant";
        const paragraph = document.createElement("p");
        paragraph.textContent = `Experience the finest dining with our exquisite menu and exceptional
          service.`;
        node.append(h1, paragraph);
    },
    renderMenu(){
        //alert("hi menu");
        this.elements.contentSection.innerHTML="";
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
