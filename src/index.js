import "./style.css";

// import {greekDishes} from "./scripts/menu";

// console.log(greekDishes);

const app = {
    elements:{
        navMenu: document.querySelector(".header .nav .menu")
    },
    init(){
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
        alert("hi home");
    },
    renderMenu(){
        alert("hi menu");
    },
    renderAbout(){
        alert("hi about");
    },
    renderContact(){
        alert("hi contact");
    }
}

app.init();
