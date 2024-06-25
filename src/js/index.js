// El styles lo importamos aquí para que se encargue Vite de compilar todo
import '../scss/styles.scss';

//- Crea un botón en tu página HTML y añade un evento de click que muestre en la consola el texto del botón al hacer click.

// const buttonElement = document.getElementById('button');

// const printClick = () => {
//   console.log(buttonElement.textContent);
// };
// buttonElement.addEventListener('click', printClick);

//- Crea un h1 con el texto "Soy un título ", al ponerte con el ratón encima del h1, deberá cambiar al texto a "Quita de encima!!!" y al quitarte, deberá volver a poner "Soy un título"

// const titleElement = document.getElementById('h1');

// const changeText = () => {
//   titleElement.textContent = 'Quita de encima!!!';
// };
// const changeText2 = () => {
//   titleElement.textContent = 'Soy un título';
// };

// titleElement.addEventListener('mouseover', changeText);
// titleElement.addEventListener('mouseleave', changeText2);

//- Agrega un evento de cambio de tamaño de ventana y te muestre por consola el tamaño de la ventana.

// const heightAndWidthOfWindow = () => {
//   console.log(`El alto es ${window.innerHeight}px y el ancho es ${window.innerWidth}px`);
// };
// window.addEventListener('resize', heightAndWidthOfWindow);

//- Crea un p con el texto "esperando entrada de teclado" al pulsar cualquier tecla deberá poner qué tecla has pulsado.

const paragraph = document.getElementById('p');

const changeParagraph = event => {
  paragraph.textContent = `Pulsaste la tecla ${event.key}`;
};

window.addEventListener('keydown', changeParagraph);

//- Crea un array con 5 palabras. Añade un h2 a tu HTML y ponle un id. Añade dos botones con el texto previus y next respectívamente. Haz que los botones cambien el texto del h2 con las palabras del array, cuando llegues a la última volverás a la primera si pulsas next y cuando estés en la primera podrás volver a la última dandole a previous.

// const fiveWords = ['ella', 'es', 'callaita', 'pero', 'pal'];

// const subtitleElement = document.getElementById('h2');
// const previousElement = document.getElementById('previous');
// const nextElement = document.getElementById('next');

// let counter = 0;
// const nextWord = () => {
//   if (counter >= fiveWords.length - 1) {
//     counter = 0;
//   } else {
//     counter++;
//   }
//   subtitleElement.textContent = fiveWords[counter];
// };

// const previousWord = () => {
//   if (counter <= 0) {
//     counter = fiveWords.length - 1;
//   } else {
//     counter--;
//   }
//   subtitleElement.textContent = fiveWords[counter];
// };

// subtitleElement.textContent = fiveWords[counter];

// previousElement.addEventListener('click', previousWord);
// nextElement.addEventListener('click', nextWord);

//- Repite el mismo ejercicio pero esta vez desactiva el botón previous si estás en el primer elemento y el botón next si estás en el último

// const subtitleElement2 = document.getElementById('h20');
// const previousElementDisabled = document.getElementById('previous2');
// const nextElementDisabled = document.getElementById('next2');

// let i = 0;

// const previousWordDisabled = () => {
//   nextElementDisabled.disabled = false;
//   i--;
//   if (i <= 0) {
//     previousElementDisabled.disabled = true;
//   }

//   subtitleElement2.textContent = fiveWords[i];
// };

// const nextWordDisabled = () => {
//   i++;
//   if (i === fiveWords.length - 1) {
//     nextElementDisabled.disabled = true;
//   }
//   previousElementDisabled.disabled = false;
//   subtitleElement2.textContent = fiveWords[i];
// };
// subtitleElement2.textContent = fiveWords[i];

// previousElementDisabled.addEventListener('click', previousWordDisabled);
// nextElementDisabled.addEventListener('click', nextWordDisabled);

//- Crea un input range con un label, al mover el input range deberá escribir en el label el valor del input range.

const labelElement = document.getElementById('label');
const inputElement = document.getElementById('range');

const valueRange = event => {
  labelElement.textContent = inputElement.value;
};

inputElement.addEventListener('input', valueRange);

//- Crea una lista de 4 checkbox con el texto que quieras y un botón, al pulsar el botón deberá decirte cuantos checkbox están marcados y cual es su texto.

const checkbox = document.querySelectorAll('input[type="checkbox"]');
