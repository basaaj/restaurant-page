import './style.css'
import { loadHome } from './home.js';

loadHome();

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('active')) {
            button.classList.remove('active');
        }

        else {
            button.classList.add('active');

            //TODO: Fix bottom border
            const colorDiv = document.createElement('div');
            colorDiv.classList.add('active');
            colorDiv.setAttribute('height', '100px');
            colorDiv.setAttribute('width', '150px');

            button.appendChild(colorDiv);

            //TODO: Make other buttons inactive
        }
    });
});