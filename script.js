const container = document.querySelector('.container');
// fitur darkmode 2.0
const toggleButton = document.querySelector('.toggle-button');
const bulatan = document.querySelector('.bulatan');
const light = document.querySelector('.light');
const dark = document.querySelector('.dark');
const header = document.querySelector('.header');
let theme = 'dark';
if(localStorage.getItem('theme')){
    lightMode();
}
toggleButton.addEventListener('click', function(){
    if (theme === 'dark'){
        lightMode();
    } else {
        darkMode();
    }
});

// akhir fitur darkmode 2.0


// fitur ligthbox
const kotak = document.querySelectorAll('.kotak');
let active = false;
kotak.forEach(function(e){
    e.addEventListener('click', function(){
        if(active === false){
        lightBox(e.classList[1]);
        }
    });
});
// akhir fitur lightbox

// fitur humburger-menu
const humburgerMenu = document.querySelector('.humburger-menu');
const span = document.querySelectorAll('.humburger-menu span');
let cekHumburger = false;
humburgerMenu.addEventListener('click', function(){
    animasiHumburger();
});
// akkhir fitur humburger-menu


// functions
function lightBox (namaGambar){
    active = true;
    header.style.display = 'none';
    let lightBoxContainer = document.createElement('div');
    lightBoxContainer.classList.add('lightBoxContainer');
    let lightBox = document.createElement('div');
    lightBox.classList.add('lightBox');
    lightBox.style.backgroundImage = `url(img/${namaGambar}.png)`;
    let xButton = document.createElement('button');
    const X = document.createTextNode('X');
    xButton.appendChild(X);
    xButton.classList.add('xButton');
    lightBox.appendChild(xButton);
    lightBoxContainer.appendChild(lightBox);
    document.body.appendChild(lightBoxContainer);
    container.style.filter = 'blur(8px)';

    // xButton
    xButton = document.querySelector('.xButton');
    lightBoxContainer = document.querySelector('.lightBoxContainer');
    lightBox = document.querySelector('.lightBox');
    xButton.addEventListener('click', function(){
        active = false;
        lightBox.style.animation = 'fadeOut .5s';
        setTimeout(() => {
            document.body.removeChild(lightBoxContainer);
        }, 500);
        header.style.display = 'grid';
        container.style.filter = 'blur(0px)';
    });
    // akhir xButton
}
function lightMode (){
        theme = 'light';
        localStorage.setItem('theme', 'light');
        document.body.classList.toggle('light-mode');
        header.style.color = '#fff';
        bulatan.classList.remove('geserKiri');
        bulatan.classList.add('geserKanan');
}
function darkMode (){
        theme = 'dark';
        localStorage.removeItem('theme');
        document.body.classList.toggle('light-mode');
        bulatan.classList.remove('geserKanan');
        bulatan.classList.add('geserKiri');
}
function animasiHumburger(){
    if (cekHumburger === false){
        cekHumburger = true;
        span[0].style.transform = 'rotate(45deg) translate(-1px, -1px)';
        span[1].style.transform = 'scale(0)';
        span[1].style.opacity = '0';
        span[2].style.transform = 'rotate(-45deg) translate(-1px,0)';
        for (i=0; i<span.length; i++){
            span[i].style.backgroundColor = 'rgb(255,0,0)';
        }
        } else {
        cekHumburger = false;
        span[0].style.transform = 'rotate(0deg) translate(0,0)';
        span[1].style.transform = 'scale(1)';
        span[1].style.opacity= '1';
        span[2].style.transform = 'rotate(0deg) translate(0,0)';
        for (i=0; i<span.length; i++){
            span[i].style.backgroundColor = 'rgb(255,255,255)';
        }
        }
}
// akhir functions