import { hamburgetMenu } from "./hamburget.js";
import {  newScroll, scrollup } from "./scrollup.js";
import { slider } from "./slider.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgetMenu(".panelBtn", ".panel", ".menu a");
  slider();
  scrollup();
  newScroll();
});


const typed = new Typed('.typed', {

strings:[
  '<i class="habilidades">React</i>',
  '<i class="habilidades">Javascrip</i>',
  '<i class="habilidades">PHP</i>',
  '<i class="habilidades">CSS</i>',
  '<i class="habilidades">HTML</i>',
  '<i class="habilidades">Boostrap</i>',
  '<i class="habilidades">MariaDB</i>',
  '<i class="habilidades">MySQL</i>',
  '<i class="habilidades">XAMPP</i>'
],

stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: ' ♥', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato

})

s


