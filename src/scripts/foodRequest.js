const API_KEY = "aa58d204bef842328eb48be47456fe70";
const API_URL = "https://fakerestaurantapi.runasp.net/api/Restaurant/5/menu";

export const menuSearch = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();

    if (data.results.length === 0 && page === 1) {
        alert("Δεν υπάρχουν δεδομένα για αυτο το μενού")
        return;
    }

    return data;
}