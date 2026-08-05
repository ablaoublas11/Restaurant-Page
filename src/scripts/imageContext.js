// data/imageContext.js
const imagesContext = import.meta.webpackContext("../assets/images/foods", {
  recursive: false,
  regExp: /\.(png|jpe?g|gif)$/,
});

// Δημιουργεί ένα "χάρτη" ονόματος αρχείου -> import
const images = {};
imagesContext.keys().forEach((key) => {
  // key είναι κάτι σαν "./spanakopita.jpg"
  const fileName = key.replace("./", "");
  images[fileName] = imagesContext(key);
});

export default images;