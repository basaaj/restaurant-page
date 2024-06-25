import matcha from './img/matcha.jpg';
import latte from './img/latte.jpg';
import cheesecake from './img/cheesecake.jpg';

export function loadMenu() {
    const contentDiv = document.querySelector('#content');

    const menu = document.createElement('div');
    menu.setAttribute('id', 'menuDiv');

    const item1 = createMenuItem('latte', latte, `<a href="https://unsplash.com/@nate_dumlao?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nathan Dumlao</a> on <a href="https://unsplash.com/photos/closeup-photo-of-coffee-wecVUUVopRY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>`);
    const item2 = createMenuItem('matcha latte', matcha,  `<a href="https://unsplash.com/@ninjason?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jason Leung</a> on <a href="https://unsplash.com/photos/white-ceramic-teacup-on-top-of-white-saucer-a6tKN9LfuV8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>`);
    const item3 = createMenuItem('cheesecake', cheesecake, `<a href="https://unsplash.com/@goncharovva_k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Kristina Goncharova</a> on <a href="https://unsplash.com/photos/a-glass-bowl-with-food-in-it-aJHjCVTnzFU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>`);

    menu.appendChild(item1);
    menu.appendChild(item2);
    menu.appendChild(item3);

    contentDiv.appendChild(menu);
}

function createMenuItem(itemName, itemImg, cred) {
    const item = document.createElement('div');
    item.classList.add('menuItem');

    const img = document.createElement('img');
    img.setAttribute('src', itemImg);
    item.appendChild(img);

    const text = document.createElement('div');
    text.innerHTML = `<h3>${itemName}</h3>
                      <p>Try this menu item today! 
                      Photo by ${cred}</p>`;
    item.appendChild(text);

    return item;
}

