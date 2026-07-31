import {greekDishes} from "./menu";

export const renderMenu = () => {
    //αποθηκεύουμε τα πιάτα αφού τα έχουμε ομαδοποιήσει
    const groupedDishes = groupingDishes(greekDishes);
    console.log(groupedDishes.length);
    //Δημιουργία της βάσης του δέντρου του μενού. Είναι το γενικό div μέσα στο section
    const node = document.createElement("div");
    node.className = "menuContent";

    Object.entries(groupedDishes).forEach(([categoryName, dishesArray]) => {
        //Δημιουργία καρτελών ανά κατηγορία πιάτων
        const menuItemTab = document.createElement("div");
        menuItemTab.className = "categoryTabMenu";
        const categoryTitle = document.createElement("h4");
        categoryTitle.className = "categoryTitle";
        categoryTitle.textContent = categoryName;
        node.append(categoryTitle);
        dishesArray.forEach((element) => {
            const childNode = document.createElement("div");
            childNode.className = "menuItem";

            const childItem = `
                <h3>${element.name}</h3>
                <h4>${element.category}</h4>
                <p>${element.description}</p>
                <p>${element.price}</p>
            `;
            childNode.insertAdjacentHTML("beforeend", childItem);
            menuItemTab.append(childNode);
        });
        node.append(menuItemTab);
    });
    return node;
}

const groupingDishes = (menuDishes) => {
    const newDishes = menuDishes.reduce((acc, cur) => {
        if(!acc[cur.category]){
           acc[cur.category] = []; 
        }
           
        acc[cur.category].push(cur);
        return acc;
    },{});
    return newDishes;
}

// const createMenuItem = (foodItem) => {}

// const nextMenuItems = (remainItems) => {}