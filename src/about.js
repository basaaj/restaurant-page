import img from './img/cafe.jpg';

export function loadAbout() {
    const contentDiv = document.querySelector('#content');

    const aboutDiv = document.createElement('div');
    aboutDiv.setAttribute('id', 'aboutDiv');

    const imgDiv = document.createElement('div');
    const aboutImg = document.createElement('img');
    aboutImg.setAttribute('src', img);
    aboutImg.setAttribute('id', 'aboutImg');

    aboutDiv.appendChild(aboutImg);

    const headline = document.createElement('h1');
    headline.innerText = 'Our Story';
    headline.setAttribute('class', 'headline');
    aboutDiv.appendChild(headline);

    const textDiv = document.createElement('div');
    textDiv.innerHTML = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris laoreet, justo nec rhoncus ullamcorper, 
        orci erat ullamcorper orci, ac blandit nisl mauris ornare justo. Integer vehicula, magna sit amet tincidunt sollicitudin, 
        lorem neque suscipit ante, eget hendrerit turpis sem aliquet est. Donec leo lorem, pellentesque at tempus et, dignissim nec eros. 
        Etiam semper enim sed nulla eleifend, sit amet luctus tortor molestie. Pellentesque non lectus dictum, rutrum dolor id, consectetur ante. 
        Pellentesque euismod eros vel augue aliquet, eu consequat ex efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Duis efficitur efficitur ipsum, ac porttitor dolor efficitur vel. Duis ac dolor urna. Mauris sed justo in velit fringilla consequat. 
        Praesent et urna ex. Vivamus ut ligula sit amet libero dictum tincidunt. Integer ac elementum sem, vitae iaculis lacus. Suspendisse potenti. 
        Morbi interdum id arcu sit amet pulvinar. Maecenas ac mauris placerat, consectetur velit vitae, lacinia eros. Phasellus id vestibulum ipsum, 
        eget ultrices enim. Pellentesque risus velit, fringilla id finibus at, vestibulum ac urna. Morbi nec eleifend lectus, ac finibus eros. 
        Pellentesque tincidunt dolor quis tortor sagittis, sit amet consectetur orci tempor.</p>`
    textDiv.setAttribute('class', 'aboutText');
    aboutDiv.appendChild(textDiv);

    const hours = document.createElement('div');
    hours.innerHTML = `<h3>Working Hours</h3>
                       <p>Monday - Friday: 7am - 8pm<br>
                          Saturday: 7am - 6pm<br>
                          Sunday: CLOSED</p>`;
    hours.setAttribute('class', 'hours');
    aboutDiv.appendChild(hours);

    const location = document.createElement('div');
    location.innerHTML = `<h3>Location</h3>
                          <p>725 Centre Avenue<br>
                             Province, State<br>
                             Country Zip Code</p>`;
    location.setAttribute('class', 'location');
    aboutDiv.appendChild(location);

    contentDiv.appendChild(aboutDiv);
}

