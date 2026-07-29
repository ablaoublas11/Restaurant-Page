import {greekDishes} from "./menu";

export const renderMenu = () => {
    //αποθηκεύουμε τα πιάτα αφού τα έχουμε ομαδοποιήσει
    const groupedDishes = groupingDishes(greekDishes);
    console.log(groupedDishes);

    const node = document.createElement("div");
    node.className = "menuContent";

    //πέρασμα όλου του πίνακα και δημιουργία html tag για κάθε στοιχείο του πίνακα
    greekDishes.forEach((element, index) => {
        const childNode = document.createElement("div");
        childNode.className = "menuItem";
        const childItem = `
            <h3>${element.name}</h3>
            <h4>${element.category}</h4>
            <p>${element.description}</p>
            <p>${element.price}</p>
        `;
        childNode.insertAdjacentHTML("beforeend", childItem);
        node.append(childNode);
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

const createMenuItem = (foodItem) => {

}

const nextMenuItems = (remainItems) => {

}