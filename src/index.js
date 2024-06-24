import './style.css'
import { loadHome } from './home.js';
import { loadMenu } from './menu.js';
import { loadAbout } from './about.js';

loadHome();

const homeTab = document.querySelector('#home');
const menuTab = document.querySelector('#menu');
const aboutTab = document.querySelector('#about');

homeTab.addEventListener('click', () => {
    if(!homeTab.classList.contains('active')) {
        deactivateTabs();
        clearContent();
        homeTab.classList.add('active');
        loadHome();
    }
});

menuTab.addEventListener('click', () => {
    if(!menuTab.classList.contains('active')) {
        deactivateTabs();
        clearContent();
        menuTab.classList.add('active');
        loadMenu();
    }
});

aboutTab.addEventListener('click', () => {
    if(!aboutTab.classList.contains('active')) {
        deactivateTabs();
        clearContent();
        aboutTab.classList.add('active');
        loadAbout();
    }
});

function clearContent() {
    const contentDiv = document.querySelector('#content');
    contentDiv.innerHTML = '';
}

function deactivateTabs() {
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach(button => {
        if(button.classList.contains('active')) {
            button.classList.remove('active');
        }
    });
}