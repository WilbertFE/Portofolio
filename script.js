// const container = document.querySelector('container');

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











// functions
function lightBox (namaGambar){
    active = true;
    const lightBoxContainer = document.createElement('div');
    lightBoxContainer.classList.add('lightBoxContainer');
    const lightBox = document.createElement('div');
    lightBox.classList.add('lightBox');
    lightBox.style.backgroundImage = `url(img/${namaGambar}.png)`;
    lightBoxContainer.appendChild(lightBox);
    document.body.appendChild(lightBoxContainer);
    document.body.style.backgroundColor = 'rgba(0,28,51,.9)';
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
// akhir functions