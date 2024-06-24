import bg from './img/home.jpg';

export function loadHome() {
    const contentDiv = document.querySelector('#content');
    
    const homeImg = document.createElement('img');
    homeImg.setAttribute('src', bg);
    homeImg.setAttribute('id', 'homeImg');
    contentDiv.appendChild(homeImg);

    const homeDiv = document.createElement('div');
    homeDiv.setAttribute('id', '#homeDiv');
    homeDiv.innerHTML = `<h1>Bing Cafe</h1>
                         <h3>Have a sweet little treat. You deserve it.</h3>
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris laoreet, justo nec rhoncus ullamcorper, 
                         orci erat ullamcorper orci, ac blandit nisl mauris ornare justo. Integer vehicula, magna sit amet tincidunt sollicitudin, 
                         lorem neque suscipit ante, eget hendrerit turpis sem aliquet est. Donec leo lorem, pellentesque at tempus et, dignissim nec eros. 
                         Etiam semper enim sed nulla eleifend, sit amet luctus tortor molestie. Pellentesque non lectus dictum, rutrum dolor id, consectetur ante. 
                         Pellentesque euismod eros vel augue aliquet, eu consequat ex efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                         <p>Photo by <a href="https://unsplash.com/@breakslow?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Breakslow</a> on <a href="https://unsplash.com/photos/cappuccino-cup-UMUCQcDdLws?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                         </p>`;

    contentDiv.appendChild(homeDiv);

    const homeTab = document.querySelector('#home');
    homeTab.classList.add('active');
}
