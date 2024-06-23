import image from './img/cafe.jpg';

export function loadHome() {
    const contentDiv = document.querySelector('#content');

    const headline = document.createElement('div');
    headline.classList.add('headline');
    const txt = document.createElement('div');
    txt.innerHTML = `<h1>Have a sweet little treat.</h1>
                     <h3>You deserve it. Stop by Bing Cafe today.</h3>
                    <p>Insert text.</p>`;
    headline.appendChild(txt);
    
    const homeImg = document.createElement('img');
    homeImg.setAttribute('src', image);
    homeImg.setAttribute('id', 'homeImg');
    headline.appendChild(homeImg);

    contentDiv.appendChild(headline);

    const homeTab = document.querySelector('#home');
    homeTab.classList.add('active');
}

