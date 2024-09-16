import "./styles.css";
import { loadHome } from "./home.js";
import {loadMenu } from "./menu.js";
import {loadAbout} from "./about.js";

const content = document.querySelector('#content');
const nav = document.querySelector('nav');
nav.addEventListener("click", (e) =>{

    // clear content
    content.innerHTML = '';

    // mark tab as active
    document.querySelectorAll('nav button').forEach(button => button.classList.remove('active'));
    e.target.classList.add('active');

    switch(e.target.id){
        case 'home':
            loadHome();
            break;
        case 'menu':
            loadMenu();
            break;

        case 'about':
            loadAbout();
            break;
    }
});


loadHome();
console.log("we're on");