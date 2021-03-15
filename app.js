const container = document.querySelector('.container');
const unsplashURL = 'https://source.unsplash.com/random/';
const rows = 10;

for (let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img');
    img.src = `${unsplashURL}${getRandSize()}`;
    container.appendChild(img);
};

function getRandSize() {
    return `${getRandNum()}x${getRandNum()}`
}

function getRandNum() {
    return Math.floor(Math.random() * 10) + 300;
};


